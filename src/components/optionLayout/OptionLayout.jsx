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
  }

  // input lists
  const personalInfoInputs =
    inputs &&
    inputs.map((input) => (
      <TextInput
        key={Math.random()}
        label={input.label}
        placeholder={input.placeholder}
        id={input.id}
      />
    ));

  const selectPlanInputs =
    inputs &&
    inputs.map((input) => (
      <RadioInput
        key={Math.random()}
        label={input.label}
        id={input.id}
        price={input.price}
      />
    ));

  const addOnInputs =
    inputs &&
    inputs.map((input) => (
      <CheckInput key={Math.random()} label={input.label} id={input.id} />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <h2 className={styles.subheading}>{subheading}</h2>
      </div>
      <div
        className={
          inputContainerStyle ? inputContainerStyle : styles.inputContainer
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
