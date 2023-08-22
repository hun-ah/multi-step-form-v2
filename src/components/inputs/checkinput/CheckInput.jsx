import styles from './input.module.css';
import { useContext } from 'react';
import { InputContext } from '../../../contexts/InputContext';

const CheckInput = ({ id, label, text, name, monthlyPrice, yearlyPrice }) => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        <input
          type='checkbox'
          className={styles.input}
          id={id}
          name={name}
          onChange={handleInputChange}
        />
        <div className={styles.textContainer}>
          <span className={styles.addon}>{label}</span>
          <span className={styles.description}>{text}</span>
        </div>
        <span>
          +${formInputs.monthlyPayment ? monthlyPrice : yearlyPrice}/mo
        </span>
      </label>
    </div>
  );
};

export default CheckInput;
