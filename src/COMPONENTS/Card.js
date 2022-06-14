import React from 'react'
import Card from '@mui/material/Card';
import '../css/card.css'
import { CardActions } from '@mui/material';


export default function UserCard({key,user,deletebtn}){
    return (
      <Card className='card' key={key}>
        <img src={user.pic} alt={user.firstName}/>
        <h1>{user.firstName} {user.lastName}</h1>
        <p>{user.gender}</p>
        <p>DOB : {user.dob}</p>
        <a href="mailto:nishantphule12@gmail.com"> {user.email}</a>
        <CardActions>
          {deletebtn}
        </CardActions>
      </Card>
    )
}