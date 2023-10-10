import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/')
    }


    // wi + shift + f

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            
            <div className='form_container p-5 rounded'>
                <form>
                <h3 className='text-center text-white'>Register</h3>
                <div className='mb-3'>
                    {/* <label htmlFor='fname'>First Name</label> */}
                    <input type='text' placeholder='Enter First Name' className='form-control'/>
                </div>
                <div className='mb-3'>
                    {/* <label htmlFor='lname'>Last Name</label> */}
                    <input type='text' placeholder='Enter Last Name' className='form-control'/>
                </div>
                <div className='mb-3'>
                    {/* <label htmlFor='email'>Email</label> */}
                    <input type='email' placeholder='Enter Email' className='form-control'/>
                </div>
                <div className='mb-3'>
                    {/* <label htmlFor='password'>password</label> */}
                    <input type='password' placeholder='Enter Password' className='form-control'/>
                </div>
                <div className='d-grid mt-2'>
                    <button className='btn btn-primary'>Next</button>
                </div>
                <p className='text-center  text-white mt-2'>
                   Already have an account <a style={{color: 'blue', cursor: 'pointer'}} onClick={handleLogin}>Login</a>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Signup