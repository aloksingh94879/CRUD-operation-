import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Users  ()  {
    const [users, setUsers] = useState([
    //   {
    //     Name:"alok",Email:"alok@gmail.com",Age:20
    // }
  ])

    useEffect(()=>{
      axios.get('http://localhost:3002')
      .then(result=>setUsers(result.data))
      .catch(err=>console.log(err))
      
    },[])

    const handleDelete=(id)=>{
      toast.error(`your data is deleting`,{autoClose:500})
      axios.delete('http://localhost:3002/deleteUser/'+id)

      .then(res=>{
        
     
        setTimeout(()=>{window.location.reload()},3000);
        setTimeout(()=>{toast.success(`Deleted successfully`)},2000);
        console.log(res)
      })
      .catch(err=>console.log(err))
      
    }

    
  return (
 
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-success text-white d-flex justify-content-between align-items-center p-3">
          <h5 className="mb-0">User Information</h5>
          <button className="btn btn-light btn-sm">
          <Link to="/create" className='btn btn-success'>Add +</Link>
          </button>
        </div>
        <div className="card-body p-4">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
                    // insted of user in bracket anything can be written
                   users.map((hi)=>{
                   return <tr>
                        <td >{hi.name}</td>
                        <td >{hi.email}</td>
                        <td >{hi.age}</td>
                        <td className='text-center'>
                        <Link to={`/update/${hi._id}`} className='btn btn-warning me-2'>Edit</Link>  
                        
                         <button className='btn btn-danger' onClick={(e)=>handleDelete(hi._id)}>Delete</button></td>
                    </tr>
                   })
                }
              {/* Additional rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users
