// import styles from './selectplan.module.css';
import OptionLayout from '../optionLayout/OptionLayout.jsx';

const SelectPlan = () => {
  const componentName = 'select plan';

  const heading = 'Select your plan';

  const subheading = 'You have the option of monthly or yearly billing.';

  const inputs = [
    {
      type: 'radio',
      label: 'Arcade',
      id: 'arcade',
    },
    {
      type: 'radio',
      label: 'Advanced',
      id: 'advanced',
    },
    {
      type: 'radio',
      label: 'Pro',
      id: 'pro',
    },
  ];
  return (
    <OptionLayout
      heading={heading}
      subheading={subheading}
      inputs={inputs}
      component={componentName}
    />
  );
};

export default SelectPlan;
