import { useState } from 'react';
import { List } from 'phosphor-react';
import styles from './Navbar.module.css';
import Logo from '../../assets/logo.svg';
import { navbarLinks } from '../../data/data';
import MainButton from '../UI/MainButton';
import Modal from '../UI/Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.links}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          {navbarLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.button}>
          login
        </button>
        <MainButton>sign up</MainButton>
      </div>

      <List size={45} className={styles['list-icon']} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <Modal>
          <div className={styles.modal}>
            <ul className={styles['mobile-links']}>
              {navbarLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="/">{link}</a>
                  </li>
                );
              })}
            </ul>
            <hr />
            <div className={styles['mobile-buttons']}>
              <button type="button" className={styles['mobile-button']}>
                login
              </button>
              <MainButton>sign up</MainButton>
            </div>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
