import styles from './layout.module.css';
import Sidebar from '../sidebar/Sidebar.jsx';
import Form from '../form/Form.jsx';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Form />
    </div>
  );
};

export default Layout;
