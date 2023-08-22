import styles from './input.module.css';
import { useContext } from 'react';
import { InputContext } from '../../../contexts/InputContext';

const TextInput = ({ label, placeholder, id, name }) => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type='text'
        className={styles.input}
        placeholder={placeholder}
        id={id}
        name={name}
        value={formInputs[name]}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;
