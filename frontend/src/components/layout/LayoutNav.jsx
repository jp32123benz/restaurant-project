import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import NAvbar from '../NAvbar'

const LayoutNav = ({ children }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [])
    return (
        <>
            <NAvbar />
            {children}
        </>
    )
}

export default LayoutNav