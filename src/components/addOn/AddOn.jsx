import styles from './addon.module.css';

const AddOn = ({ text, price, paymentFrequencyShort }) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>{text}</span>
      <span className={styles.price}>
        +${price}/{paymentFrequencyShort}
      </span>
    </div>
  );
};

export default AddOn;
