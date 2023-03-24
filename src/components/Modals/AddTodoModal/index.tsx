import React, { useState, FC, useEffect } from 'react';
import styles from './index.module.scss';

import { AiOutlineClose } from 'react-icons/ai';

import { useTodoStore } from '../../../store/store';

const index: React.FC = () => {
  const { modalVisible, setModalVisible } = useTodoStore();
  const { createTask } = useTodoStore();
  const [value, setValue] = useState('');

  function addTodoHandler(value: string ) {
    createTask(value);
    setValue('');
    setModalVisible();
  }

  return (
    <>
      {modalVisible && (
        <section className={styles.todoModal}>
          <div className={styles.todoModalTop}>
            <h4 className={styles.todoModalTitle}>Добавить новое дело</h4>
            <AiOutlineClose className={styles.todoModalClose} onClick={setModalVisible} />
          </div>
          <div className={styles.todoModalForm}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="введите название дела..."
              className={styles.todoModalInput}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addTodoHandler(value);
                }
              }}
            />
            <button
              className={styles.todoModalButton}
              onClick={() => {
                addTodoHandler(value);
              }}>
              добавить
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default index;
