
import './App.css';
import NavList from './NavList';
import UserList from './UserList';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import DetaiList from './DetaiList';

function App() {
  return (
    <div className="App">
      <NavList></NavList>
      <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path = '/users' element={<UserList/>}> </Route>
  <Route path='/details/:id' element={<DetaiList/>}></Route>
  </Routes>
    
    </div>
  );
}

export default App;
