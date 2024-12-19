import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function UpdateUser() {
    const { id } = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3002/getUser/' + id)
            .then(result => {
                console.log(result)

                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            }
            )
            .catch(err => console.log(err))
            console.log('hello');

}, [])

    const Update = async (e) => {
        e.preventDefault();
        axios.put("http://localhost:3002/updateUser/" + id, { name, email, age })
            .then(result => {
               toast.dark(`Loading`,{autoClose:500})
                toast.info(`${name} updated successfully`,{autoClose:2000})
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err)
            )

    }
    return (
        
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="b-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>

                    <div className="b-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)} required/>
                    </div>
                    <br />
                    <button className='btn btn-warning'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser

