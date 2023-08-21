import styles from './input.module.css';
import { ReactComponent as ArcadeIcon } from '../../../assets/icon-arcade.svg';
import { ReactComponent as AdvancedIcon } from '../../../assets/icon-advanced.svg';
import { ReactComponent as ProIcon } from '../../../assets/icon-pro.svg';

const RadioInput = ({ label, id, monthlyPrice, yearlyPrice }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.labelContainer}>
        {id == 'arcade' && <ArcadeIcon />}
        {id == 'advanced' && <AdvancedIcon />}
        {id == 'pro' && <ProIcon />}
        <div className={styles.planPrice}>
          <span className={styles.label}>{label}</span>
          <span className={styles.price}>+${monthlyPrice}/yr</span>
        </div>
        <input type='radio' className={styles.input} id={id} />
      </label>
    </div>
  );
};

export default RadioInput;
