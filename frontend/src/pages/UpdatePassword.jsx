import React, { useState } from 'react'
import '../components/form/form.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const ForgotPassword = () => {
    const { id, token } = useParams()
    const navigate = useNavigate()
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const [passwordData, setPasswordData] = useState({
        newpassword: "",
        confirmpassword: ""
    });


    const handlePasswordData = (e) => {
        const { name, value } = e.target
        setPasswordData({ ...passwordData, [name]: value })
    }

    const handleUpdateLogin = (e) => {
        e.preventDefault()
        const { newpassword, confirmpassword } = passwordData
        if (newpassword !== confirmpassword) {
            setHandleError({ status: true, msg: 'Password did not matched' })
            return
        }
        axios.post(`http://localhost:4000/api/v1/user/password-reset/${id}/${token}`, { headers: { 'Authorization': `Bearers ${token}` } }, passwordData)
            .then(response => {
                if (response.data.statusCode === 200) {
                    navigate('/login')
                }
            }).catch(err => {
                setHandleError({ status: true, msg: err.response.data.msg })
            })
    }

    return (
        <>
            <div className="form-container">
                {handleError.status && <p className='bg-of-text text-bold fs-2 text-center'>{handleError.msg}</p>}
                <h2>Update Password</h2>
                <form className="login-form" onSubmit={handleUpdateLogin}>
                    <div>
                        <input value={passwordData.newpassword} name='newpassword' onChange={handlePasswordData} type="email" id="password" placeholder="New Password" required />
                    </div>
                    <div>
                        <input value={passwordData.confirmpassword} name='confirmpassword' onChange={handlePasswordData} type="email" id="text" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassword