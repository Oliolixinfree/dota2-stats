import React from 'react';
import HeroInfo from '../HeroInfo/HeroInfo';
import styles from './HeroList.module.scss';

const HeroList = ({ heroes }) => {
  return (
    <div className={styles.wrapper}>
      <div>Heroes</div>
      <div className={styles.list}>
        {heroes &&
          heroes.map((h) => (
            <div>
              <HeroInfo
                key={h.id}
                id={h.id}
                img={h.img}
                name={h.localized_name}
                pimaryAttr={h.primary_attr}
                attackType={h.attack_type}
                roles={h.roles}>
                {h}
              </HeroInfo>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroList;
