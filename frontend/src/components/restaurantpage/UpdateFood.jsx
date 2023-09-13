import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Category } from './Category'
// import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';

const UpdateFood = () => {
    const location = useLocation().state;
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState({
        foodName: location.foodName,
        foodCategory: location.foodCategory,
        price: location.price,
        foodLabel: location.foodLabel,
        restaurantId: location.RestaurantName._id,
        foodId: location._id
    });

    const [allFoodCategory, setAllFoodCategory] = useState(Category);

    const [handleError, setHandleError] = useState({ status: false, msg: "" });
    const { token } = location.RestaurantName;

    const handleUpdateData = (event) => {
        const { name, value } = event.target;
        setUpdateData({ ...updateData, [name]: value });
    }

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:4000/api/v1/restaurants-food/update-restaurant-food', {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                },
                body: JSON.stringify(updateData)
            }
            )
            const result = await res.json()
            if (result.statusCode === 200) {
                setUpdateData({
                    foodName: "",
                    foodCategory: "",
                    price: "",
                    foodLabel: "veg",
                    restaurantId: "",
                })
                setHandleError({ status: true, msg: result.msg })
            } else {
                setHandleError({ status: false, msg: result.msg })
                // setInterval(() => { window.location.reload() }, 2000)
            }
        } catch (err) {
            setHandleError({ status: false, msg: err.msg })
            // window.location.reload()
        }
    }

    const handleImageDelete = async (data) => {
        const { public_id } = data;
        try {
            const res = await fetch(`http://localhost:4000/api/v1/restaurants-food/delete-restaurant-food-image/${updateData.foodId}/${public_id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            // const result = await res.json()
            // console.log('result in update food ============', result);
            // if (result.statusCode === 200) {
            //     setHandleError({ status: true, msg: result.msg })
            // } else {
            //     setHandleError({ status: false, msg: result.msg })
            // }
        } catch (err) {
            setHandleError({ status: false, msg: err.msg })
        }
    }

    // useEffect(() => {
    //     setUpdateData({
    //         foodName: location.foodName,
    //         foodCategory: location.foodCategory,
    //         price: location.price,
    //         foodLabel: location.foodLabel,
    //         restaurantId: location.RestaurantName._id,
    //         foodId: location._id
    //     })

    // }, [])

    return (
        <>
            <div className="d-flex flex-column FoodForm" id='UpdateFood'>
                {handleError && <p className={`${handleError.status ? 'bg-of-success-text' : 'bg-of-text'} text-bold fs-2 text-center`}>{handleError.msg}</p>}
                <h2 className='text-center mb-5'>Update Food Details</h2>
                <form className="register-form text-capitalize" onSubmit={handleRegisterFormSubmit}>
                    <div>
                        <input value={updateData.foodName} onChange={handleUpdateData} className='text-capitalize' name='foodName' type="text" id="foodname" placeholder="Food Name" required />
                    </div>
                    <div>
                        <select onChange={handleUpdateData} name="foodLabel" id="foodlabel" defaultValue={updateData.foodLabel}>
                            <option value="veg">Veg</option>
                            <option value="non-veg">Non-Veg</option>
                        </select>
                    </div>
                    <div>
                        <select
                            onChange={handleUpdateData}
                            name="foodCategory"
                            id="category"
                            className='text-capitalize'
                            defaultValue={updateData.foodCategory}
                        >
                            {allFoodCategory.map((val, ind) => {
                                return <option value={val.name} key={ind}>{val.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <input value={updateData.price} onChange={handleUpdateData} name='price' type="text" id="price" placeholder="Price" required />
                    </div>
                    <div className='row'>
                        {
                            location.foodImages.map((val, ind) => {
                                return (
                                    <div key={ind} className='imageCardForUpdate col-md-3 mb-5'>
                                        <img src={val.url} alt="..." className='mb-3' />
                                        <span>
                                            <SyncIcon className='text-warning fs-1 foodItemButton' onClick={() => ''} />
                                            <DeleteIcon className='text-danger fs-1 leftPaddForIcon foodItemButton' onClick={() => handleImageDelete(val)} />
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button type="submit" className='goBackButtonInFullCard justify-content-center mb-3'>Update</button>
                    <p className="toggle-form goBackButtonInFullCard bg-danger" onClick={() => navigate(-1)}>Go Back</p>
                </form >
            </div >
        </>
    )
}

export default UpdateFood