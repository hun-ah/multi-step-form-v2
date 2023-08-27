import OptionLayout from '../optionLayout/OptionLayout';

const PersonalInfo = ({ errMsg, setErrMsg }) => {
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
      name: 'name',
    },
    {
      type: 'text',
      label: 'Email Address',
      placeholder: 'e.g. stephenking@lorem.com',
      id: 'email',
      name: 'emailAddress',
    },
    {
      type: 'text',
      label: 'Phone Number',
      placeholder: '123 567 8910',
      id: 'phone',
      name: 'phoneNumber',
    },
  ];

  return (
    <OptionLayout
      heading={heading}
      subheading={subheading}
      inputs={inputs}
      component={componentName}
      errMsg={errMsg}
      setErrMsg={setErrMsg}
    />
  );
};

export default PersonalInfo;
