import OptionLayout from '../optionLayout/OptionLayout';

const PersonalInfo = () => {
  const componentName = 'personal info';

  const heading = 'Personal info';

  const subheading =
    'Please provide your name, email address and phone number.';

  const inputs = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'e.g. Stephen King',
      id: 'name',
    },
    {
      type: 'text',
      label: 'Email Address',
      placeholder: 'e.g. stephenking@lorem.com',
      id: 'email',
    },
    {
      type: 'text',
      label: 'Phone Number',
      placeholder: '123 567 8910',
      id: 'phone',
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

export default PersonalInfo;
