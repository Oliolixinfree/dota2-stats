import React from 'react';
import styles from './List.module.scss';

const List = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default List;
