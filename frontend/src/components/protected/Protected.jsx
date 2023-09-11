import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Protected = ({ children }) => {
    const navigate = useNavigate()
    const isToken = localStorage.getItem('token')
    useEffect(() => {
        if (!isToken) {
            navigate('/')
        }
    }, [])
    return children
}

export default Protected