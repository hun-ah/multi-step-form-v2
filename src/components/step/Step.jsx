import styles from './step.module.css';

const Step = ({ number, title, text, index }) => {
  const circleStyle =
    index == number
      ? `${styles.circle} ${styles.selected}`
      : `${styles.circle}`;
  return (
    <div className={styles.container}>
      <div className={circleStyle}>{number}</div>
      <div className={styles.textContainer}>
        <span>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default Step;
