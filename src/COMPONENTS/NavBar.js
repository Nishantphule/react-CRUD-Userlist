import React from "react";
import '../css/NavBar.css'
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Navbar(){
    return (
    <Box>
        <AppBar className="nav-row">
            <Toolbar className="column">
            <Link to="/users" className="nav-option" ><Button variant="contained">Users</Button></Link>
            <Link to="/add-user" className="nav-option"><Button variant="contained">Add New User</Button></Link>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default Navbar;