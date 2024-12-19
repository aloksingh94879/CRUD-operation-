import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './component/Users'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ToastContainer autoClose={4000} theme='colored' position="top-right"/>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
