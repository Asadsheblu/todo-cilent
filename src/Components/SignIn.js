// @ts-nocheck
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';



import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';



import {useLocation,Navigate,} from "react-router-dom";
import auth from '../firebase.init';
import Loading from './Loading';
const SignIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      console.log(user);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
        const navigate=useNavigate()
      
       const location = useLocation();
      
    
        
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
}
if(loading){
  return <Loading></Loading>
}

      if(error){
        toast.error(error?.message)
      }
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
   
   
    const handelLogin=async(e)=>{
        e.preventDefault()
      
        signInWithEmailAndPassword(email,password)
    }
    const handelResetPassword=async()=>{
 
      await sendPasswordResetEmail(email);
      toast('Sent email');
     }
    return (
        <div className='mt-5 mx-auto w-75 shadow mb-5'>
       
             <form className='pt-5 mx-auto w-50 pb-5' onSubmit={handelLogin}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onBlur={handelEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handelPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <p className="pt-2 fw-bold">Are You New ?Please....<Link className='text-decoration-none text-danger fw-bolder' to="/signUp">Registration</Link> </p>
  <h6>Forgot Your Password?<button onClick={handelResetPassword} className="fs-6" variant="btn btn-link">Reset</button></h6>
  

  <button  className="w-50 mt-3 btn btn-info"  type="submit">
    Login
  </button>



</form>
    </div>
    )
             
        
};

export default SignIn;