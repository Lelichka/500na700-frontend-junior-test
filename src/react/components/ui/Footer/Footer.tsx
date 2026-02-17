import logo from '../../../../assets/footerLogo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <img src={logo} className={styles.logo} alt={'logo'} />
        <h2 className={styles.title}>Креативное агентство 500na700</h2>
      </div>
    </footer>
  );
};
export default Footer;