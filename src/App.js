import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import logo from './logo.svg';
import Home from './Home/Home';
import MyNavbar from './Navbar/Navbar';
import MyCard from './Card/MyCard';
import Signup from './Signup/Signup';
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/nav' element={<MyNavbar/>}></Route>
      <Route path='/card' element={<MyCard/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </>
  );
}

export default App;
