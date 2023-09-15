import React, { useEffect, useState } from 'react'
import '../components/form/form.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginUser, getUserRole } from '../store/actions/userSlice'

const Login = () => {
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
        dispatch(LoginUser(loginData)).then((response) => {
            console.log(response.payload);
            const { role, token, id } = response.payload
            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
            localStorage.setItem('id', id)
            dispatch(getUserRole(role))
            if (role === 'staff' || role === 'admin' || role === 'user' || role === 'restaurant') {
                navigate('/dashboard', { replace: true })
            } else {
                setHandleError({ status: true, msg: response.payload.msg })
            }
        }).catch(err => setHandleError({ status: true, msg: err }))
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
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <div>
                        <input value={loginData.email} name='email' onChange={handleLoginData} type="email" id="email" placeholder="Email" required />
                    </div>
                    <div>
                        <input value={loginData.password} name='password' onChange={handleLoginData}
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p className="toggle-form">Not registered? Click here to register</p>
                    {handleError.status && <p className="toggle-form" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>}
                </form>
            </div>
        </>
    )
}

export default Login