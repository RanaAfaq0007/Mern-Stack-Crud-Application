import { Table, TableBody, TableCell, TableHead, TableRow,styled,Button } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { deleteUse, getUsers } from '../service/api';
import { Link } from 'react-router-dom';

const styeledTable = styled(Table)`
widht:90%;
margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUser = () => {
 const[users,setUsers] = useState([]);


  useEffect(()=>{
        getAllUsers()
  },[]);

  const getAllUsers = async ()=>{
    
      let response =   await getUsers();
      setUsers(response.data);
  }
  const onDeleteUser = async (id)=>{
    await deleteUse(id);
    getAllUsers();
  }

  return (
   <styeledTable>
    <TableHead>
           <THead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>

           </THead>
    </TableHead>
    <TableBody>
          {
            users.map(user=>(
             <TRow>
               <TableCell>{user._id}</TableCell>
               <TableCell>{user.name}</TableCell>
               <TableCell>{user.username}</TableCell>
               <TableCell>{user.email}</TableCell>
               <TableCell>{user.phone}</TableCell>
               <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editUser/${user._id}`} >Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={(e)=>onDeleteUser(user._id)} >Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
             </TRow>
            ))
          }
    </TableBody>
   </styeledTable>

    )
}

export default AllUser