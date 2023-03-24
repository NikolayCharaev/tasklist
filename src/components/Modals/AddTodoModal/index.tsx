import React,{useState} from 'react';
import styles from './index.module.scss';

import { AiOutlineClose } from 'react-icons/ai';

const index = () => {
  return (
    <section className={styles.todoModal}>
      <div className={styles.todoModalTop}>
        <h4 className={styles.todoModalTitle}>Добавить новое дело</h4>
        <AiOutlineClose className={styles.todoModalClose} />
      </div>
      <div className={styles.todoModalForm}>
        <input
          type="text"
          placeholder="введите название дела..."
          className={styles.todoModalInput}
        />
        <button className={styles.todoModalButton}>добавить</button>
      </div>
    </section>
  );
};

export default index;
