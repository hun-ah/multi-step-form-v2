import styles from './input.module.css';
import { useContext } from 'react';
import { InputContext } from '../../../contexts/InputContext';

const CheckInput = ({ id, label, text, name, monthlyPrice, yearlyPrice }) => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  const labelStyle = formInputs[name]
    ? `${styles.label} ${styles.selected}`
    : `${styles.label}`;

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={labelStyle}>
        <input
          type='checkbox'
          className={styles.input}
          id={id}
          name={name}
          checked={formInputs[name]}
          onChange={handleInputChange}
        />
        <div className={styles.textContainer}>
          <span className={styles.addon}>{label}</span>
          <span className={styles.description}>{text}</span>
        </div>
        <span>
          +${formInputs.monthlyPayment ? monthlyPrice : yearlyPrice}/
          {formInputs.monthlyPayment ? 'mo' : 'yr'}
        </span>
      </label>
    </div>
  );
};

export default CheckInput;
