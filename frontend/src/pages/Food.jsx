import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchFood from '../store/actions/FoodSlice'

const Food = () => {
    const [foodData, setFoodData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchFood).then((resp) => {
            setFoodData(resp)
        })
    }, [])
    console.log(foodData);
    return (
        <div>Food</div>
    )
}

export default Food