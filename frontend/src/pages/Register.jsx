import { useState } from 'react'
import '../components/form/form.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        profile: "",
        role: "user",
        address: ""
    });
    const [image, setImage] = useState(null);
    const [restaurantRegister, setRestaurantRegister] = useState(false);
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const handleRegisterData = (event) => {
        const { name, value } = event.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    }

    const handleRestaurantRegister = () => {
        setRestaurantRegister(true)
    }



    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:4000/api/v1/user/create-user', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ ...registerData, profile: image })
            }
            )
            const result = await res.json()
            if (result.statusCode === 200) {
                navigate('/login', { state: { email: registerData.email, password: registerData.password } })
            } else {
                window.location.reload()
            }
        } catch (err) {
            setHandleError({ status: true, msg: err.msg })
            window.location.reload()
        }
    }

    return (
        <>
            <div className="form-container">
                {handleError && <p className='bg-of-text text-bold fs-2 text-center'>{handleError.msg}</p>}
                {!restaurantRegister && < p className='text-bold text-danger text-cursor' onClick={handleRestaurantRegister}>Restaurant Register ?</p>}
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleRegisterFormSubmit} encType="multipart/form-data">
                    <div>
                        <input value={registerData.username} onChange={handleRegisterData} name='username' type="text" id="username" placeholder="Username" required />
                    </div>
                    <div>
                        <input value={registerData.email} onChange={handleRegisterData} name='email' type="email" id="email" placeholder="Email" required />
                    </div>
                    <div>
                        <input value={registerData.phoneNumber} onChange={handleRegisterData} name='phoneNumber' type="text" id="phonenumber" placeholder="Phone Number" required />
                    </div>
                    <div>
                        <select onChange={handleRegisterData} name="role" id="role">
                            <option value="user">User</option>
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>
                    <div>
                        <input onChange={handleRegisterData} name='address' type="text" id="address" placeholder="Address" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" placeholder="Profile Pic" required />
                    </div>
                    <div>
                        <input value={registerData.password} onChange={handleRegisterData} name='password' type="password" id="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Register</button>
                    <p className="toggle-form">Already registered? Click here to login</p>
                </form>
            </div >

        </>
    )
}

export default Register