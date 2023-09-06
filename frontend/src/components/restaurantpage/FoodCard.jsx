import React from 'react'
import { useEffect } from 'react';
import { fetchFood } from '../../store/actions/FoodSlice'
import { useSelector, useDispatch } from 'react-redux'
// import { useState } from 'react';

const FoodCard = () => {
    const dispatch = useDispatch()
    // const [thunkData, setThunkData] = useState([])
    const FoodData = useSelector((state) => state.food.allFoodCollections)
    useEffect(() => {
        dispatch(fetchFood())
    }, [])
    return (
        <>
            {/* <span className='Sr'>Sr.</span>
            <span className='Name'>Name</span>
            <span className='Image'>Image</span>
            <span className='Category'>Category</span>
            <span className='Price'>Price</span>
            <span className='Label'>Label</span> */}
            <div>
                {FoodData.map(() => {
                    return (
                        <>
                            < span > 1</span>
                            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        {/* <img src={} className="img-fluid rounded-start" alt="..." /> */}
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">

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