import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Link,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import PersonMain from './components/Person/Index';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";





function App() {
  return (
    <BrowserRouter>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <nav>
          <li>
            <Link to={'/Login'}> Логин</Link>
          </li>
          <li>
            <Link to={'/Register'}> Регистрация</Link>
          </li>
          <li>
            <Link to={'/Home'}> На главную</Link>
          </li>
          <li>
            <Link to={'/NotFound'}> Не найдено</Link>
          </li>    
          <li>
            <Link to={'/Person'}> Тест редакса</Link>
          </li>
      
        </nav>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/NotFound" element={<NotFound />}></Route> 
        <Route path="/Person" element={<PersonMain />}></Route> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
