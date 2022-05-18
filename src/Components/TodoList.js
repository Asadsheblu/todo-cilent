import React, { useEffect, useState } from 'react';
import List from './List';

const TodoList = () => {
    const [lists,setLists]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/task',{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>setLists(data))
    },[])
    return (
        <div className='w-50 mx-auto shadow bg-light mt-5'>
            {
                lists?.map(list=><List key={list?._id} list={list}></List>)
            }
        </div>
    );
};

export default TodoList;