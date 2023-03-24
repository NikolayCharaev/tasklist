import Categories from '../components/Categories';
import Header from '../components/Header/index';
import TodoList from '../components/TodoList';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <Categories />
          <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
