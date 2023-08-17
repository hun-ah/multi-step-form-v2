import styles from './layout.module.css';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar.jsx';
import Form from '../form/Form.jsx';

const Layout = () => {
  const [index, setIndex] = useState(1);

  return (
    <div className={styles.container}>
      <Sidebar index={index} />
      <Form index={index} setIndex={setIndex} />
    </div>
  );
};

export default Layout;
