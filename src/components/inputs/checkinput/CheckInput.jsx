import styles from './input.module.css';

const CheckInput = ({ id, label }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type='checkbox' className={styles.input} id={id} />
    </div>
  );
};

export default CheckInput;
