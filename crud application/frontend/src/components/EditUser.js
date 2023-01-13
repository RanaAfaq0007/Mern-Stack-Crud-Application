import { FormControl, FormGroup, InputLabel ,Input, Typography,styled,Button,} from '@mui/material'

import React, { useState ,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { editUser, getUser } from '../service/api';





const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;



    
    


const EditUser = () => {
    const [user,setUsers] = useState(initialValue);

    const {name , username, email,phone } = user;
    const onValueChange = (e) => {
        setUsers({...user,[e.target.name]: e.target.value});
    }

    let navigate = useNavigate();
    const {id } = useParams();

    useEffect(()=>{
      loadUserDetails();
    },[]);

    const loadUserDetails = async ()=>{
        const response = await getUser(id);
        setUsers(response.data);
    }
    const editUserDetails = async() =>{
       const response = await editUser (id,user);
       navigate("/AllUser");
    }
  return (
    <div>
         <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)}  name="name" value={user.name}/>
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name= "username" value={user.username}/>
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={(e)=>editUserDetails(e)}>Edit User</Button>
        </FormControl>
       </Container>
    </div>
  )
}

export default EditUser