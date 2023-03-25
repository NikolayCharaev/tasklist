import React, { FC, useState } from 'react';
import styles from './index.module.scss';
import dayjs from 'dayjs';

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
  const date = dayjs(elem.createdAt);
  const formatDate = date.locale('ru').format('DD.MM.YY HH:mm');
  const { removeTask } = useTodoStore();
  const [buttonsVisible, setButtonsVisible] = useState(false);
  return (
    <li className={styles.todo}>
      <div className={styles.todoTop}>
        <span className={styles.todoDate}>{formatDate}</span>
        <FaEllipsisV
          className={styles.todoEllipsis}
          onClick={() => {
            setButtonsVisible(!buttonsVisible);
          }}
        />
      </div>
      <p className={styles.todoTitle}>{elem.title}</p>

      {buttonsVisible && (
        <div className={styles.todoButtons}>
          <button
            onClick={() => {
              removeTask(elem.id);
            }}>
            удалить
          </button>
          <button>изменить</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
