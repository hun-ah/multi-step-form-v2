import styles from './optionlayout.module.css';

const OptionLayout = ({ heading, subheading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.subheading}>{subheading}</h2>
      </div>
      <div className={styles.inputContainer}></div>
    </div>
  );
};

export default OptionLayout;
