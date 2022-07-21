import styles from './Footer.module.css';
import Logo from '../../assets/logo.svg';
import { footerData, footerIcons } from '../../data/data';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={Logo} alt="/" />
      </div>
      {footerData.map((footerLinks) => {
        const { heading, links } = footerLinks;
        return (
          <div key={heading} className={styles['links-wrapper']}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => {
                const { label } = link;
                return (
                  <li>
                    <a href="/">{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className={styles['social-icons']}>
        {footerIcons.map((icons) => {
          const { id, icon } = icons;
          return (
            <div key={id}>
              <img src={icon} alt="/" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
