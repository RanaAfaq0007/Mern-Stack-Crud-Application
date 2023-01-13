import React from 'react'
import {AppBar,Toolbar,styled } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:green;



`
const Tabs = styled(NavLink)`
font-size:20px;
cursor:pointer;
margin:20px;
color:inherit;
text-decoration:none;
`
const NavBar = () => {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
                 <Tabs to='/'>CRUD APPLICATION</Tabs>
                 <Tabs to='/AllUser'>All User</Tabs>
                 <Tabs to='/add'>Add User</Tabs>
                 <Tabs to='/editUser:id'>Edit User</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default NavBar