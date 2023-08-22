import OptionLayout from '../optionLayout/OptionLayout.jsx';

const AddOns = () => {
  const componentName = 'add ons';

  const heading = 'Pick add-ons';

  const subheading = 'Add-ons help enhance your gaming experience';

  const inputs = [
    {
      type: 'checkbox',
      label: 'Online service',
      name: 'onlineService',
      text: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
      id: 'service',
    },
    {
      type: 'checkbox',
      label: 'Larger storage',
      name: 'largerStorage',
      text: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
      id: 'storage',
    },
    {
      type: 'checkbox',
      label: 'Customizable profile',
      name: 'customizeableProfile',
      text: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
      id: 'profile',
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

export default AddOns;
