import React, { useState } from 'react';

import styles from './index.module.scss';
import { BsPlusCircle } from 'react-icons/bs';

import { useTodoStore } from '../../store/store';

const index = () => {

  const {setModalVisible} = useTodoStore()
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <p className={styles.headerLogo}>todo</p>
        <BsPlusCircle className={styles.headerAddTodo} onClick={setModalVisible}/>
      </div>
    </header>
  );
};

export default index;
