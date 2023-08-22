import styles from './input.module.css';
import { ReactComponent as ArcadeIcon } from '../../../assets/icon-arcade.svg';
import { ReactComponent as AdvancedIcon } from '../../../assets/icon-advanced.svg';
import { ReactComponent as ProIcon } from '../../../assets/icon-pro.svg';
import { useContext } from 'react';
import { InputContext } from '../../../contexts/InputContext';

const RadioInput = ({ label, id, name, value, monthlyPrice, yearlyPrice }) => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  const labelStyle =
    formInputs.planType == value
      ? `${styles.labelContainer} ${styles.selected}`
      : `${styles.labelContainer}`;

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={labelStyle}>
        {id == 'arcade' && <ArcadeIcon />}
        {id == 'advanced' && <AdvancedIcon />}
        {id == 'pro' && <ProIcon />}
        <div className={styles.planPrice}>
          <span className={styles.label}>{label}</span>
          <span className={styles.price}>
            ${formInputs.monthlyPayment ? monthlyPrice : yearlyPrice}/yr
          </span>
          {!formInputs.monthlyPayment && (
            <span className={styles.free}>2 months free</span>
          )}
        </div>
        <input
          type='radio'
          className={styles.input}
          id={id}
          name={name}
          value={value}
          checked={formInputs.planType == value}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default RadioInput;
