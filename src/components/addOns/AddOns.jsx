import OptionLayout from '../optionLayout/OptionLayout.jsx';

const AddOns = () => {
  const heading = 'Pick add-ons';

  const subheading = 'Add-ons help enhance your gaming experience';

  const inputs = [
    {
      type: 'checkbox',
      label: 'Name',
      id: 'name',
    },
    {
      type: 'checkbox',
      label: 'Email Address',
      id: 'email',
    },
    {
      type: 'checkbox',
      label: 'Phone Number',
      id: 'phone',
    },
  ];

  return (
    <OptionLayout
      heading={heading}
      subheading={subheading}
      inputs={inputs}
      component='add ons'
    />
  );
};

export default AddOns;
