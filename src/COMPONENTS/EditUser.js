import React from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../css/update.css'

export default function EditUser () {
    const navigate = useNavigate();

    const { id } = useParams()
  
    const [User, setUsers] = useState([]);
  
    useEffect(() => {
      fetch(`https://6288bebc7af826e39e64a149.mockapi.io/users/${id}`, {
        method: "GET"
      })
    .then((data) => data.json())
    .then((Users) => setUsers(Users))
    
    }, [id])
  
    const [Add, setUser] = useState({firstName:User.firstName,lastName:User.lastName,gender:User.gender,dob:User.dob,email:User.email});
  
      const newUser = (add) => {
        fetch(`https://6288bebc7af826e39e64a149.mockapi.io/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(add),
        headers: {
        "Content-Type": "application/json",
      },
      }).then((data) => data.json())
      .then(() => navigate(-1))
      }
  
    return (
      <div className='info'>
        <img className='random' src="https://source.unsplash.com/random/?user/" alt={User.firstName} />
        <h1>{User.firstName} {User.lastName}</h1>
        <TextField className='input' onChange={(e => setUser({ ...Add, firstName: e.target.value }))} id="outlined-basic" label={User.firstName} variant="outlined" placeholder={User.firstName}/>
        <TextField className='input' onChange={(e => setUser({ ...Add, lastName: e.target.value }))} id="outlined-basic" label={User.lastName} variant="outlined" placeholder={User.lastName}/>
        <TextField className='input' onChange={(e => setUser({ ...Add, gender: e.target.value }))} id="outlined-basic" label={User.gender} variant="outlined" placeholder={User.gender}/>
        <TextField className='input' onChange={(e => setUser({ ...Add, dob: e.target.value }))} id="outlined-basic" label={User.dob} variant="outlined" placeholder='YYYY-MM-DD' type="date" />
        <TextField className='input' onChange={(e => setUser({ ...Add, email: e.target.value }))} id="outlined-basic" label={User.email} variant="outlined" placeholder={User.email}/>
        <Button style={{width:"20%"}} className="add" onClick={() => newUser(Add)} color="secondary" variant="contained">UPDATE User</Button>
        <Backbtn/>
      </div>
    );
  }

  function Backbtn(){
    const navigate = useNavigate();
    return(
      <div className="back-btn">
        <Button onClick={() => navigate(-1)} variant="contained"><ArrowBackIosIcon/> BACK</Button>
      </div>
    )
  }