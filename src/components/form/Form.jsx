import styles from './form.module.css';
import PersonalInfo from '../personalInfo/PersonalInfo';
import SelectPlan from '../selectPlan/SelectPlan';
import AddOns from '../addOns/AddOns.jsx';
import FinishingUp from '../finishingUp/FinishingUp.jsx';
import ThankYou from '../thankYou/ThankYou.jsx';
import Button from '../button/Button';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const Form = ({ index, setIndex }) => {
  const { formInputs } = useContext(InputContext);
  console.log(formInputs);
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

  const submitForm = () => {
    setIndex((prevIndex) => prevIndex + 1);
    const newClient = { ...formInputs };
    console.log(newClient);
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
      <div className={index == 5 ? styles.hide : styles.buttonContainer}>
        <Button text='Go Back' index={index} prevStep={prevStep} id='back' />
        {index == 4 ? (
          <Button text='Confirm' id='confirm' submitForm={submitForm} />
        ) : (
          <Button text='Next Step' nextStep={nextStep} id='next' />
        )}
      </div>
    </div>
  );
};

export default Form;
