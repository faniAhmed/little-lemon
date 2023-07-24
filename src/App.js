// import logo from './logo.svg';
import Nav from './components/nav';
import Final from './components/final';
import Footer from './components/footer'
import Welcome from './components/welcome';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Reservation from './components/reservation';
// import Header from './components/header';



function App() {
  return (
    <div className='apps' style={{backgroundColor: "#495e57"}}>
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Welcome/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        <Route path='/reservation' exact element={<Reservation/>}/>
        <Route path='/final' exact element={<Final/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
