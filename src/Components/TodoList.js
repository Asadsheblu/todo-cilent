// @ts-nocheck
import React, { useEffect, useState } from 'react';
import List from './List';

const TodoList = () => {
    const [lists,setLists]=useState([])
    useEffect(()=>{
        fetch('https://polar-eyrie-18525.herokuapp.com/task',{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>setLists(data))
    },[])
    return (
        
      <div className="mx-auto w-75 mt-5 shadow bg-light">
      <table className="table w-full">
          <thead>
              <tr>
                  <th></th>
                
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
   
            {
                lists?.map((list,index)=><List key={list?._id} list={list} index={index}></List>)
            }
            </tbody>
                </table>
            </div>
          
    


        
    );
};

export default TodoList;