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
      name: 'planType',
      value: 'arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      type: 'radio',
      label: 'Advanced',
      id: 'advanced',
      name: 'planType',
      value: 'advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      type: 'radio',
      label: 'Pro',
      id: 'pro',
      name: 'planType',
      value: 'pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
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
