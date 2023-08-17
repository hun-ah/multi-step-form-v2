// import styles from './selectplan.module.css';
import OptionLayout from '../optionLayout/OptionLayout.jsx';

const SelectPlan = () => {
  const heading = 'Select your plan';
  const subheading = 'You have the option of monthly or yearly billing.';
  return <OptionLayout heading={heading} subheading={subheading} />;
};

export default SelectPlan;
