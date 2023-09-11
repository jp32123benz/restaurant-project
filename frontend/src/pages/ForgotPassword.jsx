import React, { useEffect, useState } from 'react'
import '../components/form/form.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserData } from '../store/actions/userSlice'
import axios from 'axios'


const ForgotPassword = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });


    const handleLoginData = (e) => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/v1/user/forgot-user-password', loginData)
            .then(response => {
                if (response.data.statusCode === 200) {
                    const { role, token, id } = response.data
                    localStorage.setItem('token', token)
                    localStorage.setItem('role', role)
                    localStorage.setItem('id', id)
                    dispatch(getUserData(role))
                    if (role === 'staff' || role === 'admin' || role === 'user' || role === 'restaurant') {
                        navigate('/dashboard')
                    }
                }
            }).catch(err => {
                setHandleError({ status: true, msg: err.response.data.msg })
            })
    }

    useEffect(() => {
        if (location.state != null) {
            setLoginData({ email: location.state.email, password: location.state.password })
        }
    }, [location])

    return (
        <>
            <div className="form-container">
                {handleError.status && <p className='bg-of-text text-bold fs-2 text-center'>{handleError.msg}</p>}
                <h2>Verification mail</h2>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <div>
                        <input value={loginData.email} name='email' onChange={handleLoginData} type="email" id="email" placeholder="Email" required />
                    </div>
                    <button type="submit">Submit</button>
                    <p className="toggle-form">Go Back</p>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword