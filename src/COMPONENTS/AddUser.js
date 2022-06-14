import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/addUser.css'


export default function AddUser(){

  const navigate = useNavigate();

  const [Add, setUser] = useState({firstName:"",lastName:'',gender:"",dob:"",email:""});

    const newUser = (add) => {
      fetch("https://6288bebc7af826e39e64a149.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(add),
      headers: {
      "Content-Type": "application/json",
    },
    }).then((data) => data.json())
    .then(() => navigate('/users'))
    }

    return (
      <div className='info'>
        <TextField className='input' onChange={(e => setUser({ ...Add, firstName: e.target.value }))} id="outlined-basic" label="First Name" variant="outlined" />
        <TextField className='input' onChange={(e => setUser({ ...Add, lastName: e.target.value }))} id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField className='input' onChange={(e => setUser({ ...Add, gender: e.target.value }))} id="outlined-basic" label="Gender" variant="outlined" />
        <TextField className='input' onChange={(e => setUser({ ...Add, dob: e.target.value }))} id="outlined-basic" label="DOB" variant="outlined" placeholder='YYYY-MM-DD' type="date" />
        <TextField className='input' onChange={(e => setUser({ ...Add, email: e.target.value }))} id="outlined-basic" label="Email" variant="outlined"/>
        <Button style={{width:"20%"}} className="add" onClick={() => newUser(Add)} variant="contained">Add User</Button>
      </div>
    )
  }
