import React from 'react';
import styles from './index.module.scss';

import { useTodoStore } from '../../../store/store';

import TodoModal from '../../Modals/AddTodoModal';
import TaskItem from '../TaskItem';
const TodoList = () => {
  const { tasks } = useTodoStore();
  return (
    <section className={styles.todo}>
      <TodoModal />
      <ul className={styles.todoList}>
        {!tasks.length && <h3>Дел пока нет</h3>}
        {tasks.map((elem) => {
          return <TaskItem elem={elem} key={elem.id} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
