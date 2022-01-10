import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DetaiList() {
 const[user,setUser]= useState({})
 const {id} = useParams();
 const navigate= useNavigate();

 useEffect (()=>{
axios
.get (`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res=>setUser(res.data))
.catch(err=>console.log(err))

 },[


 ])
    return (
        <div>
         <h1>{user.name}</h1> 
         <h2>{user.username}</h2>  
         <h2>{user.email}</h2>
         <button onClick={()=>navigate(-1)}   >Back</button>
           <button  onClick={()=>navigate('/')}  >  home  </button>
        
        </div>
    )
}

export default DetaiList
