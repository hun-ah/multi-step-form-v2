import styles from './thankyou.module.css';
import { ReactComponent as Thanks } from '../../assets/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Thanks className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Thank you!</h1>
        <p className={styles.p}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
