import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import text from '../../i18n/da';
import styles from './index.module.css';
import Button from '../Button';
import { ModalContext } from '../SupportModal';
import classNames from 'classnames';

const pages = [
  ['/', 'Hjem'],
  ['/the-plan', 'Om planen'],
  ['/supporters', 'Støtter'],
  ['/behind-the-plan', 'Om os'],
];

const MenuItems = () => (
  <>
    {pages.map(([href, title]) => (
      <Link
        activeClassName={href !== '/' ? styles.menuItemActive : null}
        className={styles.menuItem}
        to={href}
        key={href}
      >
        {title}
      </Link>
    ))}
  </>
);

const Menu = ({ scrollThreshold = 100 }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const openModal = useContext(ModalContext);

  const handleScroll = () => {
    setSticky(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={classNames(styles.navBar, {
          green: isSticky,
          [styles.navBarActive]: isSticky,
        })}
      >
        <div className={styles.leftMenu}>
          <Link to="/">
            <img src="/logo_white.png" alt="" className={styles.logo} />
          </Link>
          <div
            className={classNames(styles.menuItems, {
              [styles.menuItemsActive]: true, //!isSticky,
            })}
          >
            <MenuItems />
          </div>
        </div>
        <div
          className={classNames(styles.burgerButton, {
            // [styles.burgerButtonActive]: isSticky,
          })}
          onClick={() => setBurgerActive(true)}
        >
          <span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
            <span className={styles.burgerButtonBar}></span>
          </span>
        </div>
        <Button onClick={openModal} small inverted className={styles.signCTA}>
          Skriv under&nbsp;&nbsp;🌱
        </Button>
      </div>
      <div
        className={classNames(styles.burgerMenu, {
          [styles.burgerMenuActive]: burgerActive,
        })}
      >
        <div
          className={styles.crossButton}
          onClick={() => setBurgerActive(false)}
        >
          <span className={styles.crossBar}></span>
          <span className={styles.crossBar}></span>
        </div>
        <MenuItems />
      </div>
      <div
        className={classNames(styles.overlay, {
          [styles.overlayActive]: burgerActive,
        })}
        onClick={() => setBurgerActive(false)}
      ></div>
    </div>
  );
};

export default Menu;
