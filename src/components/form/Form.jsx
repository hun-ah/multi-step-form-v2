import styles from './form.module.css';
import { useState } from 'react';
import PersonalInfo from '../personalInfo/PersonalInfo';
import SelectPlan from '../selectPlan/SelectPlan';
import AddOns from '../addOns/AddOns.jsx';
import FinishingUp from '../finishingUp/FinishingUp.jsx';
import ThankYou from '../thankYou/ThankYou.jsx';
import Button from '../button/Button';

const Form = () => {
  const [index, setIndex] = useState(1);
  const nextStep = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 5) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevStep = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {index == 1 && <PersonalInfo />}
        {index == 2 && <SelectPlan />}
        {index == 3 && <AddOns />}
        {index == 4 && <FinishingUp />}
        {index == 5 && <ThankYou />}
      </form>
      <div className={styles.buttonContainer}>
        <Button text='Go Back' index={index} prevStep={prevStep} id='back' />
        {index == 4 ? (
          <Button text='Confirm' id='confirm' />
        ) : (
          <Button text='Next Step' nextStep={nextStep} id='next' />
        )}
      </div>
    </div>
  );
};

export default Form;
