import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Error from '../pages/Error'
import Register from '../pages/Register'
import Login from '../pages/Login'
// import Food from '../pages/Food'
import Dashboard from '../pages/Dashboard'
import Protected from '../components/protected/Protected'
import RoleCheck from '../components/protected/RoleCheck'
import LayoutNav from '../components/layout/LayoutNav'
import DashLayout from '../components/layout/DashLayout'
import StaffPage from '../pages/StaffPage'
import RestaurantPage from '../pages/RestaurantPage'
import UserPage from '../pages/UserPage'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import './router.css'
import FoodLIst from '../components/restaurantpage/FoodLIst'
import CreateFood from '../components/restaurantpage/CreateFood'
import '../components/error/error.css'
import Order from '../components/restaurantpage/Order'
import Staff from '../components/restaurantpage/Staff'
import RestaurantFullFoodCard from '../components/restaurantpage/RestaurantFullFoodCard'
import ForgotPassword from '../pages/ForgotPassword'
import UpdatePassword from '../pages/UpdatePassword'

const Router = () => {
    const selector = useSelector((state) => state.user.role)
    const role = localStorage.getItem('role')
    const [user_Role, setUser_Role] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const urole = selector || role
        setUser_Role(urole)
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(loadingTimeout)
    })

    if (isLoading) {
        return <CircularProgress className='Loader' />
    }

    return (
        <>
            <Routes>
                <Route exact path='/' element={
                    <LayoutNav>
                        <HomePage />
                    </LayoutNav>
                } />
                <Route exact path='/register' element={
                    <LayoutNav>
                        <Register />
                    </LayoutNav>} />

                <Route exact path='/login' element={
                    <LayoutNav>
                        <Login />
                    </LayoutNav>} />

                <Route exact path='/forgot-password' element={
                    <LayoutNav>
                        <ForgotPassword />
                    </LayoutNav>} />

                <Route exact path='/update-password/:id/:token' element={
                    <LayoutNav>
                        <UpdatePassword />
                    </LayoutNav>} />

                <Route exact path='/dashboard' element={
                    user_Role === 'admin' ? (< DashLayout >
                        <Protected >
                            <Dashboard />
                        </Protected>
                    </DashLayout>)
                        : user_Role === 'user' ? (<Protected>
                            <UserPage />
                        </Protected>)
                            : user_Role === 'staff' ? (<Protected>
                                <StaffPage />
                            </Protected>)
                                : user_Role === 'restaurant' ? (<Protected>
                                    <RestaurantPage />
                                </Protected>)
                                    : <Navigate to='*' replace />
                } >
                    <Route path='/dashboard/create-food' element={
                        <Protected>
                            <RoleCheck userRole={user_Role} >
                                <CreateFood />
                            </RoleCheck>
                        </Protected>} />
                    <Route path='/dashboard/food-list' element={
                        <Protected>
                            <RoleCheck userRole={user_Role} >
                                <FoodLIst />
                            </RoleCheck>
                        </Protected>} />
                    <Route path='/dashboard/order' element={
                        <Protected>
                            <RoleCheck userRole={user_Role} >
                                <Order />
                            </RoleCheck>
                        </Protected>} />
                    <Route path='/dashboard/staff-list' element={
                        <Protected>
                            <RoleCheck userRole={user_Role} >
                                <Staff />
                            </RoleCheck>
                        </Protected>} />

                    <Route path='/dashboard/inventory/RestaurantFullFoodCard' element={
                        <Protected>
                            <RestaurantFullFoodCard />
                        </Protected>
                    } />
                </Route>

                < Route path='*' element={<Error />} />
            </Routes >
        </>
    )
}

export default Router