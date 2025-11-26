import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Login() {

    const [phone,setPhone]=useState("")
    const Navigate=useNavigate();


const handleLogin=async()=>{
    
    try{
    const res=await axios.get("https://691edd49bb52a1db22bf7421.mockapi.io/api/phoneno/users");
    
    const users=res.data;
    const found=users.find(user=>user.phone===phone)


    if (found)
    {
        Navigate("/home");
    }
    else
    {
        alert("error");
        Navigate("/invalid phone number")
    }
}
catch(error){
    console.log("error");
    alert("api error-invalid number")
}    
};


  return (
   <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h2>Login-9876543210</h2>
     <div className="mb-3">
        <label className='form-label'>phoneNum</label>
    <input type="text" 
     placeholder='enter your number'
     value={phone}
     onChange={(e)=>setPhone(e.target.value)}
     style={{ padding:10,marginBottom:10}}
    
    />
    </div>
    <br />
    <button onClick={handleLogin}>submit</button>

   
    </div>
    </div>
  )
}

export default Login