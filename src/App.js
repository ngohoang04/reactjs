
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="app">


      <Header />
      <button><Link to="./users">go to user page</Link></button>
      <button><Link to="./admins">go to admin page</Link></button>
    </div>
  );
}


export default App;
