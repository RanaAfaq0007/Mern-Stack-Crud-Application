import axios from "axios";

const usersUrl = 'http://localhost:7000';


export const addUser = async (data) => {
    try {

      return await axios.post(`${usersUrl}/add`, data);
        
    } catch (error) {
        console.log("Error while calling the add user api",error);
    }
}


export const getUsers=async ()=>{
  try {
    return await axios.get(`${usersUrl}/all`);
  } catch (error) {
    console.log("error while calling the getUsers API",error);
  }
} 


export const getUser=async (id)=>{
  try {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);

  } catch (error) {
    console.log("error while calling the getUsers API",error);
  }
} 
 
export const editUser = async (id,user) => {
  return await axios.put(`${usersUrl}/${id}`,user)
}

export const deleteUse = async (id,user) =>{
  return await axios.delete(`${usersUrl}/${id}`,user)
}