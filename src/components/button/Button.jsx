import styles from './button.module.css';

const Button = ({ text, index, id, nextStep, prevStep }) => {
  const btnStyle =
    id == 'back'
      ? `${styles.back}`
      : id == 'confirm'
      ? `${styles.button} ${styles.confirm}`
      : `${styles.button}`;

  return (
    <button
      className={index == 1 ? styles.hide : btnStyle}
      onClick={id == 'next' ? nextStep : prevStep}
    >
      {text}
    </button>
  );
};

export default Button;
