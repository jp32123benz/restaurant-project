import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateFood = () => {
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        foodName: "",
        foodCategoryId: "",
        price: "",
        foodLabel: "",
        restaurantId: ""
    });
    const [image, setImage] = useState([]);
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const handleRegisterData = (event) => {
        const { name, value } = event.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const ImagesArray = []
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            ImagesArray.push(reader.result)
        };
        setImage(ImagesArray);
    }

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault()
        const restaurantId = sessionStorage.getItem('id')
        setRegisterData({ ...registerData, restaurantId })
        console.log(registerData);
        // try {
        //     const res = await fetch('http://localhost:4000/api/v1/restaurants-food/create-restaurant-food', {
        //         method: "POST",
        //         headers: {
        //             "Content-type": "application/json"
        //         },
        //         body: JSON.stringify({ ...registerData, foodImages: image })
        //     }
        //     )
        //     const result = await res.json()
        //     if (result.statusCode === 200) {
        //         navigate('/login', { state: { email: registerData.email, password: registerData.password } })
        //     } else {
        //         window.location.reload()
        //     }
        // } catch (err) {
        //     setHandleError({ status: true, msg: err.msg })
        //     window.location.reload()
        // }
    }

    return (
        <>
            <div className="form-container foodFormContainer">
                {handleError && <p className='bg-of-text text-bold fs-2 text-center'>{handleError.msg}</p>}
                <h2>Add Food</h2>
                <form className="register-form" onSubmit={handleRegisterFormSubmit} encType="multipart/form-data">
                    <div>
                        <input value={registerData.foodName} onChange={handleRegisterData} name='foodName' type="text" id="foodname" placeholder="Food Name" required />
                    </div>
                    <div>
                        <select onChange={handleRegisterData} name="foodCategory" id="category">
                            {Category.map((val, ind) => < option value={val._id} key={ind}>{val.name}</option>)}
                            {/* <option value="non-veg">Non-Veg</option> */}
                        </select>
                    </div>
                    <div>
                        <select onChange={handleRegisterData} name="role" id="role">
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                    <div>
                        <input value={registerData.price} onChange={handleRegisterData} name='price' type="text" id="price" placeholder="Price" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" required />
                    </div>
                    <button type="submit">Add</button>
                    <p className="toggle-form">Already registered? Click here to login</p>
                </form >
            </div >

        </>
    )
}

export default CreateFood