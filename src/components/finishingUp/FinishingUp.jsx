import OptionLayout from '../optionLayout/OptionLayout.jsx';

const FinishingUp = () => {
  const componentName = 'finishing up';

  const heading = 'Finishing up';

  const subheading = 'Double-check everything looks OK before confirming.';

  return (
    <OptionLayout
      heading={heading}
      subheading={subheading}
      component={componentName}
    />
  );
};

export default FinishingUp;
