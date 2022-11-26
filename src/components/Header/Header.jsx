import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>LOGO</div>
      <ul className={styles.menu}>
        <li>Heroes</li>
        <li>Items</li>
        <li>Matches</li>
        <li>Players</li>
      </ul>
    </div>
  );
};

export default Header;
