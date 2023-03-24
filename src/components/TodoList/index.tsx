import React from 'react';
import styles from './index.module.scss';

import TodoModal from '../Modals/AddTodoModal';
const TodoList = () => {
  return (
    <section className={styles.todo}>
      <TodoModal />
      <ul className={styles.todoList}></ul>
    </section>
  );
};

export default TodoList;
