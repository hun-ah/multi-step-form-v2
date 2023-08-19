import styles from './input.module.css';

const RadioInput = ({ label, id }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type='radio' className={styles.input} id={id} />
    </div>
  );
};

export default RadioInput;
