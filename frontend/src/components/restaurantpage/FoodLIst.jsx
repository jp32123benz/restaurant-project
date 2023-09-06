import React from 'react'
import './restaurant.css'
import FoodCard from './FoodCard';

const FoodLIst = () => {
    return (
        <section id="foodList">
            <header className='FoodCardHead'>
                <span className='Sr'>Sr.</span>
                <span className='Name'>Name</span>
                <span className='Image'>Image</span>
                <span className='Category'>Category</span>
                <span className='Price'>Price</span>
                <span className='Label'>Label</span>
            </header>
            <FoodCard />
        </section>
    )
}

export default FoodLIst