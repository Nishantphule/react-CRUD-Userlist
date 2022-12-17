import './App.css';
import Navbar from './COMPONENTS/NavBar';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Users from './COMPONENTS/Users';
import AddUser from './COMPONENTS/AddUser';
import NotFound from './COMPONENTS/NotFound';
import EditUser from './COMPONENTS/EditUser';
import { UserInfo } from './COMPONENTS/UserInfo';

function App() {

  return (
    <div className="container">
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path='/users' element={<Users />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='/useredit/:id' element={<EditUser />} />
          <Route path='/userinfo/:id' element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
