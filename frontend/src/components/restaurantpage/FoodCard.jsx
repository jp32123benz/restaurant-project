import React from 'react'
import { useEffect } from 'react';
import { fetchFood } from '../../store/actions/FoodSlice'
import { useSelector, useDispatch } from 'react-redux'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import { useNavigate } from 'react-router-dom'
import './restaurant.css'
// import { useState } from 'react';

const FoodCard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [thunkData, setThunkData] = useState([])
    const FoodData = useSelector((state) => state.food.allFoodCollections)
    useEffect(() => {
        dispatch(fetchFood())
    }, [])
    return (
        <>
            <div className='row'>
                {FoodData.map((val, ind) => {
                    console.log(val);
                    return (
                        <>
                            <div key={ind} className='text-capitalize col-md-4' onClick={navigate('/dashboard/inventory/RestaurantFullFoodCard', { state: val })}>
                                <span>{ind + 1}</span>
                                <div className="card mb-4" style={{ maxWidth: "540px" }}>
                                    <div className="row g-0 ">
                                        <div className="col-md-5">
                                            <img src={val.foodImages[0]} className="img-fluid rounded-start w-100 h-100" alt="..." />
                                        </div>
                                        <div className="col-md-7 p-2">
                                            <div className="card-body">
                                                <div className='d-flex justify-content-between'>
                                                    <h4 className=''>{val.RestaurantName.username}</h4>
                                                </div>
                                                <div>Name :- {val.foodName}</div>
                                                <div>category :- {val.foodCategory}</div>
                                                <div>Price :- {val.price}</div>
                                                {val.foodLabel === 'veg' ? (<RadioButtonCheckedIcon className='text-success fs-3' />) : (<RadioButtonCheckedIcon className='text-danger' />)}
                                            </div>
                                            <div className=' p-2 d-flex justify-content-start'>
                                                <span><SyncIcon className='text-warning fs-1' /></span>
                                                <span><DeleteIcon className='text-danger fs-1 leftPaddForIcon' /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </div >
        </>
    )
}

export default FoodCard