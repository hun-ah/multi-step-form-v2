import styles from './input.module.css';
import { useContext } from 'react';
import { InputContext } from '../../../contexts/InputContext';

const TextInput = ({ label, placeholder, id, name, errMsg, setErrMsg }) => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  const inputStyle = errMsg
    ? `${styles.input} ${styles.error}`
    : `${styles.input}`;

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {errMsg && <span className={styles.errorMsg}>{errMsg}</span>}
      </div>
      <input
        type='text'
        className={inputStyle}
        placeholder={placeholder}
        id={id}
        name={name}
        value={formInputs[name]}
        onChange={() => {
          handleInputChange(event);
          setErrMsg((prevMsg) => ({
            ...prevMsg,
            [name]: '',
          }));
        }}
      />
    </div>
  );
};

export default TextInput;
