import styles from './sidebar.module.css';
import Step from '../step/Step';

const Sidebar = ({ index }) => {
  const steps = [
    {
      number: 1,
      title: 'STEP 1',
      text: 'YOUR INFO',
    },
    {
      number: 2,
      title: 'STEP 2',
      text: 'SELECT PLAN',
    },
    {
      number: 3,
      title: 'STEP 3',
      text: 'ADD-ONS',
    },
    {
      number: 4,
      title: 'STEP 4',
      text: 'SUMMARY',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        {steps.map((step) => (
          <Step
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
