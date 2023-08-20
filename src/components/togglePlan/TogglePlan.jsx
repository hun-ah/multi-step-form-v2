import styles from './toggleplan.module.css';

const TogglePlan = () => {
  return (
    <div className={styles.container}>
      <span>Yearly</span>
      <label className={styles.switch}>
        <input type='checkbox' />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span>Monthly</span>
    </div>
  );
};

export default TogglePlan;
