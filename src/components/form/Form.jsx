import styles from './form.module.css';
import PersonalInfo from '../personalInfo/PersonalInfo';
import SelectPlan from '../selectPlan/SelectPlan';
import AddOns from '../addOns/AddOns.jsx';
import FinishingUp from '../finishingUp/FinishingUp.jsx';
import ThankYou from '../thankYou/ThankYou.jsx';
import Button from '../button/Button';
import { useState, useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

const Form = ({ index, setIndex }) => {
  const { formInputs } = useContext(InputContext);
  const [errMsg, setErrMsg] = useState({});

  const nextStep = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(formInputs.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
      setErrMsg(newErrors);
    }

    if (!formInputs.name) {
      newErrors.name = 'This field is required';
      setErrMsg(newErrors);
    }
    if (!formInputs.emailAddress) {
      newErrors.emailAddress = 'This field is required';
      setErrMsg(newErrors);
    }
    if (!formInputs.phoneNumber) {
      newErrors.phoneNumber = 'This field is required';
      setErrMsg(newErrors);
    }

    if (Object.keys(newErrors).length === 0) {
      setIndex((prevIndex) => {
        if (prevIndex === 5) {
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }
  };

  const prevStep = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const submitForm = async () => {
    setIndex((prevIndex) => prevIndex + 1);
    const newClient = { ...formInputs };
    try {
      const res = await fetch(
        'https://multi-step-form-api.vercel.app/submitUserInfo',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newClient),
        }
      );
      res.status === 201 && console.log('user created');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {index == 1 && <PersonalInfo errMsg={errMsg} setErrMsg={setErrMsg} />}
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
