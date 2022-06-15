import React from "react";
import '../css/NavBar.css'
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function Navbar(){
    return (
    <Box>
        <AppBar className="nav-row">
            <Toolbar className="column">
            <NavLink to="/users" className="nav-option" activeClassName="active"><Button variant="contained">Users</Button></NavLink>
            <NavLink to="/add-user" className="nav-option" activeClassName="active"><Button variant="contained">Add New User</Button></NavLink>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default Navbar;