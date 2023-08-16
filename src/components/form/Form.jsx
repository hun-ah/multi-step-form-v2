import styles from './form.module.css';
import { useState } from 'react';
import PersonalInfo from '../personalInfo/PersonalInfo';
import SelectPlan from '../selectPlan/SelectPlan';
import AddOns from '../addOns/AddOns.jsx';
import FinishingUp from '../finishingUp/FinishingUp.jsx';
import ThankYou from '../thankYou/ThankYou.jsx';

const Form = () => {
  const [index, setIndex] = useState(1);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {index === 1 && <PersonalInfo />}
        {index == 2 && <SelectPlan />}
        {index == 3 && <AddOns />}
        {index == 4 && <FinishingUp />}
        {index == 5 && <ThankYou />}
      </form>
      <div className={styles.buttonContainer}></div>
    </div>
  );
};

export default Form;
