import React, { useState, useEffect } from 'react'
import RestaurantNavbar from '../components/RestaurantNavbar'
import '../components/restaurantpage/restaurant.css'
import { Outlet } from 'react-router-dom'

const RestaurantPage = () => {
    const [userData, setUserData] = useState({})

    const getUserData = async () => {
        const token = sessionStorage.getItem('token')
        const id = sessionStorage.getItem('id')
        try {

            const res = await fetch('http://localhost:4000/api/v1/user/get-user', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearers ${token}`
                },
                body: JSON.stringify({ id })
            })
            const result = await res.json()
            setUserData(result)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <RestaurantNavbar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default RestaurantPage