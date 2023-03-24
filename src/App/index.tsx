import Categories from '../components/Categories';
import Header from '../components/Header/index';
import TodoList from '../components/TodoList';

import styles from './index.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Categories />
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
