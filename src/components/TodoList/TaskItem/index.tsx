import React, { FC, useState } from 'react';
import styles from './index.module.scss';

import { FaEllipsisV } from 'react-icons/fa';
import { useTodoStore } from '../../../store/store';
interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface TaskItemProps {
  elem: Task;
}

const TaskItem: FC<TaskItemProps> = ({ elem }) => {
    const {removeTask} = useTodoStore()
  const [buttonsVisible, setButtonsVisible] = useState(false);
  return (
    <li className={styles.todo}>
      <p className={styles.todoTitle}>{elem.title}</p>
      <FaEllipsisV
        className={styles.todoEllipsis}
        onClick={() => {
          setButtonsVisible(!buttonsVisible);
        }}
      />
      {buttonsVisible && (
        <div className={styles.todoButtons}>
          <button onClick={() => { 
            removeTask(elem.id)
          }}>удалить</button>
          <button>изменить</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
