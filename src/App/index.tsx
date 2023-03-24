import Categories from '../components/Categories';
import Header from '../components/Header/index';

function App() {
  return (
    <div className="todo">
      <div className="container">
        <Header />
        <div className="content">
          <Categories />
          
        </div>
      </div>
    </div>
  );
}

export default App;
