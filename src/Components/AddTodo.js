// @ts-nocheck
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const AddTodo = () => {
    const addList=(e)=>{
        e.preventDefault()
        const name=e.target.name.value 
        const details=e.target.details.value
        const data={name,details};
        console.log(data);
        const url='https://polar-eyrie-18525.herokuapp.com/task'
        fetch(url,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
            if(data.insertedId){
                window.location.reload()
                toast.success("Added task")
            }
        })
    }
    return (
        <div className='shadow w-75 mx-auto p-5'>
            <form onSubmit={addList}>
            <div className="mb-3 mx-auto w-50">
  <label for="exampleFormControlInput1" className="form-label">Enter E-mail</label>
  <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" required/>
</div>
<div className="mb-3 mx-auto w-50">
  <label for="exampleFormControlTextarea1" className="form-label">Enter Description</label>
  <textarea name='details' className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
</div>
<input className="form-control mx-auto w-25" type="submit" value="Add Task" />
<ToastContainer />
</form>
        </div>
    );
};

export default AddTodo;