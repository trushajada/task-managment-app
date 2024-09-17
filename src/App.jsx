import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Componets/Login/Login';
import Register from './Componets/Register/Register';
import TaskManagement from './Componets/TaskManagment/TaskManagment';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/task' element={<TaskManagement/>}></Route>

      </Routes>

    </>

  );
}

export default App;
