import React, { useState } from 'react'
import '../components/form/form.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const ForgotPassword = () => {
    const navigate = useNavigate()
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const [forgotPasswordData, setForgotPasswordData] = useState({
        email: "",
        password: ""
    });


    const handleForgotPasswordData = (e) => {
        const { name, value } = e.target
        setForgotPasswordData({ ...forgotPasswordData, [name]: value })
    }

    const handlePasswordSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/v1/user/forgot-user-password', forgotPasswordData)
            .then(response => {
                if (response.data.statusCode === 200) {
                    const { token } = response.data
                    sessionStorage.setItem('token', token)
                    setHandleError({ status: true, msg: response.data.msg })
                }
            }).catch(err => {
                setHandleError({ status: true, msg: err.response.data.msg })
            })
    }

    return (
        <>
            <div className="form-container">
                {handleError.status && <p className='bg-of-text text-bold fs-2 text-center'>{handleError.msg}</p>}
                <h2>Verification mail</h2>
                <form className="login-form" onSubmit={handlePasswordSubmit}>
                    <div>
                        <input value={forgotPasswordData.email} name='email' onChange={handleForgotPasswordData} type="email" id="email" placeholder="Email" required />
                    </div>
                    <button type="submit">Submit</button>
                    <p className="toggle-form" onClick={() => navigate(-1)}>Go Back</p>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword