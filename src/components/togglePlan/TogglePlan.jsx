import styles from './toggleplan.module.css';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const TogglePlan = () => {
  const { formInputs, handleInputChange } = useContext(InputContext);

  return (
    <div className={styles.container}>
      <span
        className={
          formInputs.monthlyPayment ? `${styles.deselected}` : undefined
        }
      >
        Yearly
      </span>
      <label className={styles.switch}>
        <input
          type='checkbox'
          name='monthlyPayment'
          checked={formInputs.monthlyPayment}
          onChange={handleInputChange}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span
        className={
          !formInputs.monthlyPayment ? `${styles.deselected}` : undefined
        }
      >
        Monthly
      </span>
    </div>
  );
};

export default TogglePlan;
