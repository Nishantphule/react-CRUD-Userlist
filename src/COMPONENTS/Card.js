import React from 'react'
import '../css/card.css'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function UserCard({key,user,deletebtn,editbtn}){
    return (
        <TableRow key={key}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.gender}</TableCell>
          <TableCell>{user.dob}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{editbtn}{deletebtn}</TableCell>
        </TableRow>
    )
}