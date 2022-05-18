import React from 'react';

const List = ({list}) => {
   const handelDelete=(id)=>{
    fetch(`http://localhost:5000/task/${id}`,{
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
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Action</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{list?.name}</td>
      <td>{list?.details}</td>
      <td><button onClick={()=>handelDelete(list?._id)} className='btn btn-outline-info'>Delete</button></td>
     
    </tr>
   
  </tbody>
</table>
        </div>
    );
};

export default List;