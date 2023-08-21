import styles from './input.module.css';

const CheckInput = ({ id, label, text, monthlyPrice, yearlyPrice }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        <input type='checkbox' className={styles.input} id={id} />
        <div className={styles.textContainer}>
          <span className={styles.addon}>{label}</span>
          <span className={styles.description}>{text}</span>
        </div>
        <span>+${monthlyPrice}/mo</span>
      </label>
    </div>
  );
};

export default CheckInput;
