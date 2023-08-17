// import styles from './personalinfo.module.css';
import OptionLayout from '../optionLayout/OptionLayout';

const PersonalInfo = () => {
  const heading = 'Personal info';
  const subheading =
    'Please provide your name, email address and phone number.';

  return <OptionLayout heading={heading} subheading={subheading} />;
};

export default PersonalInfo;
