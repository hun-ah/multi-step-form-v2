import styles from './displaycost.module.css';
import { useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';
import { IndexContext } from '../../contexts/IndexContext';
import AddOn from '../addOn/AddOn';

const DisplayCost = () => {
  const { formInputs } = useContext(InputContext);
  const { setIndex } = useContext(IndexContext);

  const paymentFrequencyUpper = formInputs.monthlyPayment ? 'Month' : 'Year';

  const paymentFrequencyLower = formInputs.monthlyPayment ? 'month' : 'year';

  const paymentFrequencyShort = formInputs.monthlyPayment ? 'mo' : 'yr';

  const planType =
    formInputs.planType.charAt(0).toUpperCase() + formInputs.planType.slice(1);

  let planCost;

  if (formInputs.planType == 'arcade') {
    formInputs.monthlyPayment ? (planCost = 9) : (planCost = 90);
  } else if (formInputs.planType == 'advanced')
    formInputs.monthlyPayment ? (planCost = 12) : (planCost = 120);
  else {
    formInputs.monthlyPayment ? (planCost = 15) : (planCost = 150);
  }

  let addOns = [];

  const addOn = [
    {
      name: 'Online service',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: 'Larger storage',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: 'Customizable profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  if (formInputs.onlineService) {
    addOns.push(addOn[0]);
  }
  if (formInputs.largerStorage) {
    addOns.push(addOn[1]);
  }
  if (formInputs.customizeableProfile) {
    addOns.push(addOn[2]);
  }

  let totalCost = planCost;

  addOns.forEach((addOn) =>
    formInputs.monthlyPayment
      ? (totalCost += addOn.monthlyPrice)
      : (totalCost += addOn.yearlyPrice)
  );

  const handleChangeStep = (e) => {
    e.preventDefault();
    setIndex(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.planContainer}>
        <div className={styles.plan}>
          <div className={styles.planContent}>
            <span>
              {planType} ({paymentFrequencyUpper}ly)
            </span>
            <span className={styles.textSecondary} onClick={handleChangeStep}>
              Change
            </span>
          </div>
          <span>
            ${planCost}/{paymentFrequencyShort}
          </span>
        </div>
        {addOns.length > 0 && <div className={styles.divider}> </div>}
        <div className={styles.addOnsContainer}>
          {addOns.map((addOn) => (
            <AddOn
              key={addOn.name}
              text={addOn.name}
              price={
                formInputs.monthlyPayment
                  ? addOn.monthlyPrice
                  : addOn.yearlyPrice
              }
              paymentFrequencyShort={paymentFrequencyShort}
            />
          ))}
        </div>
      </div>
      <div className={styles.totalContainer}>
        <span className={styles.textSecondary}>
          Total (per {paymentFrequencyLower})
        </span>
        <span className={styles.total}>
          +${totalCost}/{paymentFrequencyShort}
        </span>
      </div>
    </div>
  );
};

export default DisplayCost;
