import styles from './toggleplan.module.css';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const TogglePlan = () => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  return (
    <div className={styles.container}>
      <label
        className={
          formInputs.monthlyPayment ? `${styles.deselected}` : undefined
        }
        htmlFor='monthlyPayment'
      >
        Yearly
      </label>
      <label className={styles.switch}>
        <input
          type='checkbox'
          name='monthlyPayment'
          id='monthlyPayment'
          checked={formInputs.monthlyPayment}
          onChange={handleInputChange}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <label
        className={
          !formInputs.monthlyPayment ? `${styles.deselected}` : undefined
        }
        htmlFor='monthlyPayment'
      >
        Monthly
      </label>
    </div>
  );
};

export default TogglePlan;
