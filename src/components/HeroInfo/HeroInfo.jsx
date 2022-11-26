import React from 'react';
import styles from './HeroInfo.module.scss';
import { API_URL } from '../../config';

const HeroInfo = ({ id, img, name, pimaryAttr, attackType, roles }) => {
  return (
    <div className={styles.wrapper}>
      <img src={API_URL + img} alt={'heroImg'} />
      <div>Name: {name}</div>
      <div>Attribute: {pimaryAttr}</div>
      <div>Attack type: {attackType}</div>
      <div>Roles: {roles}</div>
    </div>
  );
};

export default HeroInfo;
