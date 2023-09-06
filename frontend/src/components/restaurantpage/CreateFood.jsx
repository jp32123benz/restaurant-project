import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const CreateFood = () => {
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        foodName: "",
        foodCategoryId: "64f725cc589292fc04b66f12",
        price: "",
        foodLabel: "veg",
        restaurantId: "",
        foodImages: []
    });
    const [image, setImage] = useState([]);
    const [Category, setCategory] = useState([]);
    const [handleError, setHandleError] = useState({ status: false, msg: "" })
    const handleRegisterData = (event) => {
        const { name, value } = event.target
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleImageChange = (event) => {
        const ImagesArray = []
        const { files } = event.target;
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const string = event.target.result
                ImagesArray.push(string)
            };
            reader.readAsDataURL(files[i]);
            setImage(ImagesArray);
        }
    }

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault()
        const restaurantId = sessionStorage.getItem('id')
        registerData.restaurantId = restaurantId
        registerData.foodImages = image
        try {
            const res = await fetch('http://localhost:4000/api/v1/restaurants-food/create-restaurant-food', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                },
                body: JSON.stringify(registerData)
            }
            )
            const result = await res.json()
            if (result.statusCode === 200) {
                console.log('Successfully sended req')
            } else {
                window.location.reload()
            }
        } catch (err) {
            setHandleError({ status: true, msg: err.msg })
            window.location.reload()
        }
    }

    const getCategory = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/v1/category/get-category', {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                }
            })
            const result = await res.json()
            setCategory(result.findData)
        } catch (err) {
            console.log('Err in create Food get category', err);
        }
    }

    useEffect(() => {
        getCategory()
    }, [])
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
                        <select onChange={handleRegisterData} name="foodLabel" id="foodlabel" value={registerData.foodLabel}>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={handleRegisterData} name="foodCategoryId" id="category" value={registerData.foodCategoryId}>
                            {Category.map((val, ind) => {
                                return < option value={val._id} key={ind}>{val.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <input value={registerData.price} onChange={handleRegisterData} name='price' type="text" id="price" placeholder="Price" required />
                    </div>
                    <div>
                        <input onChange={handleImageChange} name='profile' type="file" id="profile" multiple required />
                    </div>
                    <button type="submit">Add</button>
                    <p className="toggle-form">Already registered? Click here to login</p>
                </form >
            </div >

        </>
    )
}

export default CreateFood