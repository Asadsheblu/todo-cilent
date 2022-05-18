// @ts-nocheck

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Header = () => {
    const [user]=useAuthState(auth)
    const handelSignOut=()=>{
        signOut(auth)
    }
    return (
        <div className='mt-5'>
     
      
     {
        user?
        <button onClick={handelSignOut} className='btn btn-info me-2'>SignOut</button>
        :
        <button className='btn btn-info me-2'><Link className='text-decoration-none text-white'to="/signin">SingIn</Link></button>
     }
            
        </div>
    );
};

export default Header;