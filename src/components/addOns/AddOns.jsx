// import styles from './addons.module.css';
import OptionLayout from '../optionLayout/OptionLayout.jsx';

const AddOns = () => {
  const heading = 'Pick add-ons';

  const subheading = 'Add-ons help enhance your gaming experience';

  const inputs = [
    {
      type: 'checkbox',
      label: 'Name',
      placeholder: 'e.g. Stephen King',
      id: 'name',
    },
    {
      type: 'checkbox',
      label: 'Email Address',
      placeholder: 'e.g. stephenking@lorem.com',
      id: 'email',
    },
    {
      type: 'checkbox',
      label: 'Phone Number',
      placeholder: '123 567 8910',
      id: 'phone',
    },
  ];

  return (
    <OptionLayout heading={heading} subheading={subheading} inputs={inputs} />
  );
};

export default AddOns;
