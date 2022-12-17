import React from 'react'
import '../css/card.css'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function UserCard({key,user,deletebtn,editbtn,userInfo}){
    return (
        <TableRow key={key}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.firstName} {user.lastName}</TableCell>
          <TableCell>{userInfo}{editbtn}{deletebtn}</TableCell>
        </TableRow>
    )
}