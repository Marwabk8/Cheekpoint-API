import axios from 'axios'
import { useEffect, useState } from 'react';
import CardList from './CardList';
import { Navigate } from 'react-router-dom'


function UserList() {
const[users,setUsers]= useState([])  
    useEffect (()=>{
 axios
 .get ('https://jsonplaceholder.typicode.com/users')
 .then(res=>setUsers(res.data))
 .catch (err=>console.log(err));
    },[]);

    return (
    <div>
    <h1>Liste of users</h1> 

        <div className='container'>
           
     {users.map(el=><CardList el={el} key={el.id}></CardList>)}  
     {/* <Navigate to='/'></Navigate>      */}
        </div>
        </div>
    )
}

export default UserList
