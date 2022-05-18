// @ts-nocheck
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './Loading';

 


const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const [displayName, setDisplayName] = useState('');
    const [confrimPassword,setConfrimPassword]=useState("")
    
   
  
    const [
        createUserWithEmailAndPassword,
        user,loading,
        error] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const [sendEmailVerification] = useSendEmailVerification(auth);
      console.log(user);
      const navigate=useNavigate()
      if(user){
        navigate('/')
      }
      if(error){
        toast(error?.message)
      }
      if(loading){
        return <Loading></Loading>
      }
    const handelName=(e)=>{
      setDisplayName(e.target.value)
    }
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
    const handeleConfrimPass=(e)=>{
      setConfrimPassword(e.target.value)
  }
  
   
    const handelRegister=async(e)=>{
        e.preventDefault()
        if(password!==confrimPassword){
          toast("Your Two Password don't match..Please try To Again")
          return
      }
      if(password.length<6){
          toast('Please type password at least 6 character')
      }
       await createUserWithEmailAndPassword
        (email,password)
      await  sendEmailVerification()
      toast('sent verification email')
        await updateProfile({displayName})
        toast("Updated profile")
        e.target.reset()
    }
    return (
        <div className='mt-5 shadow w-75 mx-auto mb-5'>
          
              <form className='pt-5 mx-auto w-50 pb-5' onSubmit={handelRegister}>
          <div className="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" onBlur={handelName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onBlur={handelEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handelPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confrim Password</label>
    <input onBlur={handeleConfrimPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Confrim Password" required/>
  </div>
  
  <p>Already Have An Acoount?. <Link className="text-decoration-none" to='/signIn'>Login</Link></p>
  <button  className="w-50 mt-3 btn btn-primary" type="submit">
    Registration
  </button>
  
 
  
 
 
</form>

            </div>
          
    );
};

export default SignUp;