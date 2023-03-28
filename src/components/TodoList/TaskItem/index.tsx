import React, { FC, useState, useRef, useEffect } from 'react';
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
  const ref = useRef<HTMLInputElement>(null);
  const date = dayjs(elem.createdAt);
  const formatDate = date.locale('ru').format('DD.MM.YY HH:mm');
  const { removeTask, toEdited, setToEdit, updateTask, editItemId, setEditItemId } = useTodoStore();

  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [editValue, setEditValue] = useState(elem.title);

  const [editTaskId, setEditTaskId] = useState<string>(' ');

  useEffect(() => {
    if (toEdited) {
      ref.current?.focus();
    }
  }, [toEdited]);

  return (
    <li className={styles.todo}>
      <div className={styles.todoTop}>
        <span className={styles.todoDate}>{formatDate}</span>
        <FaEllipsisV
          className={styles.todoEllipsis}
          onClick={() => {
            setButtonsVisible(!buttonsVisible);

            setEditItemId(elem.id);
            setEditTaskId(elem.id);
          }}
        />
      </div>
      {toEdited && editItemId === editTaskId ? (
        <input
          ref={ref}
          value={editValue}
          className={styles.todoUpdateInput}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : (
        <p className={styles.todoTitle}>{elem.title}</p>
      )}

      {editItemId === editTaskId && (
        <div className={styles.todoButtons}>
          <button
            onClick={() => {
              removeTask(elem.id);
            }}>
            удалить
          </button>
          <button
            onClick={(e) => {
              setEditItemId(elem.id);
              setEditTaskId(elem.id);
              setToEdit();
              if (!editValue.length) {
                return;
              }
              updateTask(elem.id, editValue);
            }}>
            изменить
          </button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
