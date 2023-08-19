import styles from './input.module.css';

const TextInput = ({ label, placeholder, id }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type='text'
        className={styles.input}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default TextInput;
