import React, { useState } from 'react';

import styles from './index.module.scss';
import { BsPlusCircle } from 'react-icons/bs';

const index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <p className={styles.headerLogo}>todo</p>
        <BsPlusCircle className={styles.headerAddTodo} />
      </div>
    </header>
  );
};

export default index;
