import React, {FC} from 'react'
import styles from './index.module.scss'

interface Task { 
    id : string,
    title : string,
    createdAt: number;
}

interface TaskItemProps { 
    elem : Task
}

const TaskItem:FC<TaskItemProps> = ({elem}) => {
  return (
    <li className={styles.todo}>
        <p className={styles.TodoTitle}>{elem.title}</p>
    </li>
  )
}

export default TaskItem
