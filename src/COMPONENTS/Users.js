import React from 'react'
import UserCard from './Card'
import '../css/users.css'
import { IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';

 function Users(){
  // const navigate = useNavigate();
  const [list1, setList] = useState([]);
  const getUsers = () => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/users", {
      method: "GET"
    })
  .then((data) => data.json())
  .then((Users) => setList(Users))
  }

useEffect(() => getUsers(),[]);

  const deleteUser = (id) => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/users/"+id, {
      method: "DELETE"
    })
  .then((data) => data.json())
  .then(() => getUsers())
}
  return (
    <div className='Users'>

      {list1.map((data) => (<UserCard 
      key={data.id} 
      user={data} 
      id={data.id}
      deletebtn={<IconButton title="Delete User"  onClick={() => deleteUser(data.id)}><DeleteIcon color="error"/></IconButton>}/>))}
    </div>
  )
}
export default Users;