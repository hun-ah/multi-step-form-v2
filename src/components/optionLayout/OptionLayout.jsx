import styles from './optionlayout.module.css';
import Input from '../input/Input';
import TogglePlan from '../togglePlan/TogglePlan.jsx';

const OptionLayout = ({ heading, subheading, inputs, component }) => {
  let inputContainerStyle;
  if (component == 'personal info') {
    inputContainerStyle = `${styles.personalInfoContainer}`;
  } else if (component == 'select plan') {
    inputContainerStyle = `${styles.selectPlanContainer}`;
  }

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
        {inputs &&
          inputs.map((input) => (
            <Input
              key={Math.random()}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              id={input.id}
              component={component}
            />
          ))}
      </div>
      {component == 'select plan' && <TogglePlan />}
    </div>
  );
};

export default OptionLayout;
