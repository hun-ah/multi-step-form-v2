import styles from './optionlayout.module.css';
import TogglePlan from '../togglePlan/TogglePlan';
import TextInput from '../inputs/textInput/TextInput';
import RadioInput from '../inputs/radioInput/RadioInput';
import CheckInput from '../inputs/checkinput/CheckInput';

const OptionLayout = ({ heading, subheading, inputs, component }) => {
  let inputContainerStyle;
  if (component == 'personal info') {
    inputContainerStyle = `${styles.personalInfoContainer}`;
  } else if (component == 'select plan') {
    inputContainerStyle = `${styles.selectPlanContainer}`;
  } else if (component == 'add ons') {
    inputContainerStyle = `${styles.addOnContainer}`;
  }

  // input lists
  const personalInfoInputs =
    inputs &&
    inputs.map((input) => (
      <TextInput
        key={input.id}
        label={input.label}
        placeholder={input.placeholder}
        id={input.id}
        name={input.name}
      />
    ));

  const selectPlanInputs =
    inputs &&
    inputs.map((input) => (
      <RadioInput
        key={input.id}
        label={input.label}
        id={input.id}
        monthlyPrice={input.monthlyPrice}
        yearlyPrice={input.yearlyPrice}
      />
    ));

  const addOnInputs =
    inputs &&
    inputs.map((input) => (
      <CheckInput
        key={input.id}
        label={input.label}
        id={input.id}
        text={input.text}
        monthlyPrice={input.monthlyPrice}
        yearlyPrice={input.yearlyPrice}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.subheading}>{subheading}</h2>
      </div>
      <div
        className={
          inputContainerStyle ? inputContainerStyle : styles.stepContainer
        }
      >
        {inputs && component == 'personal info' && personalInfoInputs}
        {inputs && component == 'select plan' && selectPlanInputs}
        {inputs && component == 'add ons' && addOnInputs}
      </div>
      {component == 'select plan' && <TogglePlan />}
    </div>
  );
};

export default OptionLayout;
