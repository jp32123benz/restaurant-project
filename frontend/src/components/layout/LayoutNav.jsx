import React from 'react'
import NAvbar from '../NAvbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LayoutNav = ({ children }) => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')
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