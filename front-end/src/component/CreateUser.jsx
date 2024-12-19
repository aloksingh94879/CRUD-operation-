import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            age
        };
        try {
            const response = await axios.post("http://localhost:3002/createUser", formData
                //     ,{headers:{
                //     'Content-Type':'application/json'
                // }}
            );

            console.log('data posted sucessfully', response.data);
            toast.success(`${formData.name} registered successfully`,{autoClose:2000})
            navigate('/')

        } catch (error) {
            console.log('error posting data', error);

        }

        // axios.post("http://localhost:3002/createUser",{name,email,age})
        // .then(result=>console.log(result))
        // .catch(err=>console.log(err))



        // console.log(formData);



    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}  >
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="b-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="b-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} required/>
                    </div>
                    <br />
                    <button className='btn btn-success' >Submit</button>
                </form >
            </div>
        </div>
    )
}

export default CreateUser
