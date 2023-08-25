import styles from './optionlayout.module.css';
import TogglePlan from '../togglePlan/TogglePlan';
import DisplayCost from '../displayCost/DisplayCost';
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
  } else if (component == 'finishing up') {
    inputContainerStyle = `${styles.finishingUpContainer}`;
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
        name={input.name}
        value={input.value}
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
        name={input.name}
        text={input.text}
        monthlyPrice={input.monthlyPrice}
        yearlyPrice={input.yearlyPrice}
      />
    ));

  // which inputs to show
  let showInput;
  switch (component) {
    case 'personal info':
      showInput = personalInfoInputs;
      break;
    case 'select plan':
      showInput = selectPlanInputs;
      break;
    case 'add ons':
      showInput = addOnInputs;
      break;
    default:
      showInput = null;
  }

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
        {inputs && showInput}
        {component == 'finishing up' && (
          <DisplayCost selectPlanInputs={selectPlanInputs} />
        )}
      </div>
      {component == 'select plan' && <TogglePlan />}
    </div>
  );
};

export default OptionLayout;
