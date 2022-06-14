import './App.css';
import Navbar from './COMPONENTS/NavBar';
import React from 'react';
import {Route, Routes,Navigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Users from './COMPONENTS/Users';
import AddUser from './COMPONENTS/AddUser';
import  NotFound  from './COMPONENTS/NotFound';

function App() {

  return (
    <div className="container">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route path="*" element={<Navigate replace to ="/404" />} />
          <Route path="/" element={<Navigate replace to ="/users" />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add-user' element={<AddUser />}/>
          <Route path='/404' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
