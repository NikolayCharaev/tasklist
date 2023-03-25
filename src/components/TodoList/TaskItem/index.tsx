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
  const { removeTask, toEdited, setToEdit, updateTask } = useTodoStore();

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [editValue, setEditValue] = useState(elem.title);
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
      {toEdited ? (
        <input
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : (
        <p className={styles.todoTitle}>{elem.title}</p>
      )}

      {buttonsVisible && (
        <div className={styles.todoButtons}>
          <button
            onClick={() => {
              removeTask(elem.id);
            }}>
            удалить
          </button>
          <button
            onClick={() => {
              setToEdit();
              updateTask(elem.id, editValue);
            }}>
            {toEdited ? 'обновить' : 'изменить'}
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
