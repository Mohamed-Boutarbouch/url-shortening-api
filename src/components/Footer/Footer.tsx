import styles from './Footer.module.css';
import { footerData } from '../../data/data';
import FooterSocialIcons from './FooterSocialIcons';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <FooterLogo />
      {footerData.map((footerLinks) => {
        const { heading, links } = footerLinks;
        return (
          <div key={heading} className={styles['links-wrapper']}>
            <h4>{heading}</h4>
            <ul>
              {links.map((link) => {
                const { label } = link;
                return (
                  <li key={label}>
                    <a href="/">{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <FooterSocialIcons />
    </footer>
  );
};

export default Footer;
