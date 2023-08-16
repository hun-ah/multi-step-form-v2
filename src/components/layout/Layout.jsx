import styles from './layout.module.css';
import Sidebar from '../sidebar/Sidebar.jsx';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
};

export default Layout;
