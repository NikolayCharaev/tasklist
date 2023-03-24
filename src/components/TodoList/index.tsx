import React from 'react'
import styles from './index.module.scss'


import TodoModal from '../Modals/AddTodoModal'
const TodoList = () => {
  return (
    <section className={styles.todo}>
        <h3 className={styles.todoTitle}>Список моих дел</h3>
        <TodoModal/>
        <ul className={styles.todoList}>
            
        </ul>
    </section>
  )
}

export default TodoList
