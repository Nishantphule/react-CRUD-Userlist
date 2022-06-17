import React from 'react'
import UserCard from './Card'
import '../css/users.css'
import { IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

 function Users(){
  const navigate = useNavigate();
  const [list1, setList] = useState([]);
  const getUsers = () => {
    fetch("https://6288bebc7af826e39e64a149.mockapi.io/users", {
      method: "GET"
    })
  .then((data) => data.json())
  .then((Users) => setList(Users))
  }

useEffect(() => getUsers(),[]);

  const deleteUser = (id,f,l) => {
    if(window.confirm(`Confirm to delete ${f} ${l} data?` )){
      fetch("https://6288bebc7af826e39e64a149.mockapi.io/users/"+id, {
        method: "DELETE"
      })
      .then((data) => data.json())
      .then(() => getUsers())
    }
    
  
}
  return (
    <TableContainer className='Users' component={Paper}>
      <h1 className='List'>Users list</h1>
      <Table className='user-info' >
        <TableHead>
          <TableRow>
            <TableCell >Id</TableCell>
            <TableCell >First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >DOB</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {list1.map((data) => (<UserCard 
      key={data.id} 
      user={data} 
      id={data.id}
      editbtn={<IconButton title="Edit User" onClick={() => navigate("/useredit/"+ data.id)}><EditIcon color="primary"/></IconButton>}
      deletebtn={<IconButton title="Delete User" onClick={() => deleteUser(data.id,data.firstName,data.lastName)}><DeleteIcon color="error"/></IconButton>}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default Users;