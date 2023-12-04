import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")
const [succes,setSucces] = useState("")
const [error,setError] = useState("") 

const changeEmail = (e) => {
    setEmail(e.target.value)
    setSucces("")
    setError("")
}

const changePassword = (e) => {
    setPass(e.target.value)
    setSucces("")
    setError("")
}



const handleClick = () => {
    const bodyPayLoad = {
        email : email,
        password : pass,

    }
    axios
    .post('https://api-car-rental.binaracademy.org/customer/auth/register',bodyPayLoad)
    .then((res) =>{
        console.log(res)
        setSucces(res.data)
    })
    .catch((err) => {
        console.log(err.response)
        setError(err.response.data) })
}

  return (
    <div>
     <div className='head-form'>
    <div className='form-register'>
        <Link to='/home'>
        <div className='logo-register'>p</div>
        </Link>
 
    <div className='header-register'>
    Sign Up
    </div>
    {succes ? <p className='alert-succes'>Registrasi Succes!</p> : null}
    <form className='register'>
        <label className='label-register'>
            Email*
            <input onChange={changeEmail} value={email} className='input-register' type="text" placeholder='Contoh: johndee@gmail.com'/>
            {error ? <p  className='alert'> Email Not Found!</p> : null}
        </label>
    </form>
    <form className='register'>
        <label className='label-register'>
            Password*
            <input onChange={changePassword}  value={pass}  className='input-password' type="password"  placeholder='6+ karakter' 
             validation={{
                required: {
                  value: true,
                  message: 'required',
                },
                minLength: {
                  value: 6,
                  message: 'min 6 characters',
                },
              }}/>
            {error ? <p  className='alert'> Password Not Found!</p> : null}
        </label>
    </form>
    <form className='register'>
        <label className='label-password'>
            Konfirmasi Password*
            <input className='input-password' type="password" placeholder='6+ karakter'
            validation={{
                required: {
                  value: true,
                  message: 'required',
                },
                minLength: {
                  value: 6,
                  message: 'min 6 characters',
                },
              }} />
            {error ? <p  className='alert'> Password Not Found!</p> : null}
        </label>
    </form>
    <button onClick={handleClick}  className='btn-signup'>Sign Up</button>.
    <div className='have-account'>
    Already have an account? 
    <Link to='/login'>
    <h4>Sign In Hare </h4>
    </Link>
    </div>
    
    </div>
    <div className='heading-formlogin'>
        <h1>Binar Car Rental</h1>
        <img className='image-formlogin' src="./image/Landing page - Desktop.png" alt="" />

    </div>
    </div>
    
    </div>
  )
}

export default Register