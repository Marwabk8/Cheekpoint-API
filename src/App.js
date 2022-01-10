
import './App.css';
import NavList from './Component/NavList';
import UserList from './Component/UserList';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import DetaiList from './Component/DetaiList';

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
