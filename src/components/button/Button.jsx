import styles from './button.module.css';

const Button = ({ text, index, nextStep, prevStep }) => {
  return (
    <button
      className={index == 1 ? styles.hide : styles.button}
      onClick={text === 'Next Step' ? nextStep : prevStep}
    >
      {text}
    </button>
  );
};

export default Button;
