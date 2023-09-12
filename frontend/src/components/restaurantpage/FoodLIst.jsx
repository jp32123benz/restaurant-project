import React from 'react'
import './restaurant.css'
import FoodCard from './FoodCard';

const FoodLIst = () => {
    return (
        <div className="row" id="foodList">
                <FoodCard />
        </div>
    )
}

export default FoodLIst