import Header from '../../ui/Header/Header.tsx';
import {Outlet} from 'react-router';
import styles from'./Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>
        <Outlet/>
      </main>
    </div>
  );
};
export default Layout;
