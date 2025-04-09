
import './App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <div className='header-container'><Header /></div>
      <div className='main-container'>
        <div className='sidebar-container'>

        </div>
        <div className='app-container'>
          <Outlet />
        </div>
      </div>

      <div>


        {/* <button><Link to="./users">go to user page</Link></button> */}
        {/* <button><Link to="./admins">go to admin page</Link></button> */}
      </div>
    </div>
  );
}


export default App;
