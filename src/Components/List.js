import React from 'react';

const List = ({list,index}) => {
   const handelDelete=(id)=>{
    fetch(`https://polar-eyrie-18525.herokuapp.com/task/${id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount){
            window.location.reload()
            window.confirm("Are you Sure Want To Delete?")
        }
    })
   }
    return (
       
            

    <tr>
      <th scope="row">{index+1}</th>
      <td>{list?.name}</td>
      <td>{list?.details}</td>
      <td><button onClick={()=>handelDelete(list?._id)} className='btn btn-outline-info'>Delete</button></td>
     
    </tr>
   
 

       
    );
};

export default List;