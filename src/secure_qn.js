import React from 'react';
import { useNavigate } from 'react-router-dom'

function Next() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/')
    }

    return (
    <div>SARAN </div>


    )
}
    
export default Next