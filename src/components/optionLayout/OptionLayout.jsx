import styles from './optionlayout.module.css';

const OptionLayout = ({ heading, subheading }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1>{heading}</h1>
        <p>{subheading}</p>
      </div>
      <div></div>
    </div>
  );
};

export default OptionLayout;
