import React from 'react';
import '../css/userInfo.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IconButton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export function UserInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const deleteUser = (id, f, l) => {
        if (window.confirm(`Confirm to delete ${f} ${l} data?`)) {
            fetch("https://6288bebc7af826e39e64a149.mockapi.io/users/" + id, {
                method: "DELETE"
            })
                .then((data) => data.json())
                .then(() => navigate("/users"))
        }
    }

    useEffect(() => {
        fetch(`https://6288bebc7af826e39e64a149.mockapi.io/users/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((user) => setUser(user));

    }, [id]);

    return (
        <div className='user-info-container'>
            <IconButton onClick={() => navigate("/users")} color="primary" variant="contained">
                <ArrowBackIcon />Back
            </IconButton>
            <div className='userInfoCard'>
                <div>
                    <img className='user-profile' src={user.pic} alt="User profile pic" />
                </div>
                <h1>
                    {user.firstName} {user.lastName}
                </h1>
                <h3>{user.email}</h3>
                <h3>{user.gender}</h3>
                <h3>{user.dob}</h3>
                <div className='actions-tab'>
                    {<IconButton title="Edit User" onClick={() => navigate("/useredit/" + id)}><EditIcon color="primary" /> EDIT</IconButton>}

                    {<IconButton title="Delete User" onClick={() => deleteUser(user.id, user.firstName, user.lastName)}><DeleteIcon color="error" /> DELETE</IconButton>}
                </div>
            </div>
        </div>
    );


}
