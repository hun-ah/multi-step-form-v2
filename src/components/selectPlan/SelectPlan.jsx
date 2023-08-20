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
      price: '$9/mo',
    },
    {
      type: 'radio',
      label: 'Advanced',
      id: 'advanced',
      price: '$12/mo',
    },
    {
      type: 'radio',
      label: 'Pro',
      id: 'pro',
      price: '$15/mo',
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
