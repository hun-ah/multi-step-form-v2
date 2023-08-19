import styles from './input.module.css';

const Input = ({ type, label, placeholder, id, component }) => {
  let inputContainerStyle;
  let labelStyle;
  let inputStyle;

  if (component == 'personal info') {
    inputContainerStyle = `${styles.personalInfoContainer}`;
    labelStyle = `${styles.personalInfoLabel}`;
    inputStyle = `${styles.personalInfoInput}`;
  } else if (component == 'select plan') {
    inputContainerStyle = `${styles.selectPlanContainer}`;
    labelStyle = `${styles.selectPlanLabel}`;
    inputStyle = `${styles.selectPlanInput}`;
  }

  return (
    <div
      className={inputContainerStyle ? inputContainerStyle : styles.container}
    >
      <label
        htmlFor={id}
        className={labelStyle ? labelStyle : styles.container}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={inputStyle && inputStyle}
      />
    </div>
  );
};

export default Input;
