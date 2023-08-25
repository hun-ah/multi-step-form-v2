import styles from './layout.module.css';
import { useState } from 'react';
import { IndexContext } from '../../contexts/IndexContext';
import Sidebar from '../sidebar/Sidebar.jsx';
import Form from '../form/Form.jsx';

const Layout = () => {
  const [index, setIndex] = useState(1);

  return (
    <IndexContext.Provider value={{ setIndex }}>
      <div className={styles.container}>
        <Sidebar index={index} />
        <Form index={index} setIndex={setIndex} />
      </div>
    </IndexContext.Provider>
  );
};

export default Layout;
