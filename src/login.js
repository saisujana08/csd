import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            
            <div className='form_container p-5 rounded-3'>
                <form>
                <h3 className='text-center text-white'>Login</h3>
                <div className='mb-2'>
                    {/* <label htmlFor='email'>Email</label> */}
                    
                    <div className='d-flex justify-content-around align-items-center inputDiv'>
                        <input type='email' placeholder='Enter Email' className='form-control suji'/>
                        <ion-icon name="mail"></ion-icon>
                    </div>
                    
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor='password'>password</label> */}
                    <input type='password' placeholder='Enter Password' className='form-control'/>
                </div>
                <div className='mb-2'>
                    {/* <label htmlFor='check' className='custom-input-label'>Remember me</label> */}
                    <input type='checkbox' className='custom-control custom-checkbox ms-2' id='check'/>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Login</button>
                </div>
                <p className='text-center text-white mt-2'>
                   Don't have an account?<Link to='/signup' className='ms-2'>Register</Link>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Login