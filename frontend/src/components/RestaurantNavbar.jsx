import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [NavbarToggler, setNavbarToggler] = useState(false)
    const handleNavbarShow = () => {
        setNavbarToggler(!NavbarToggler)
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{zIndex:"999"}}>
                <div className="container-fluid">
                    <Link to='/dashboard' className="navbar-brand logo me-auto">
                        <h1 className='blackColor'>Yummy<span>.</span></h1>
                    </Link >
                    <button className='navbar-toggler' type="button" onClick={handleNavbarShow} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${NavbarToggler ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={handleNavbarShow} className="nav-link active fs-5" to="/dashboard/create-food">add Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavbarShow} className="nav-link fs-5" to="/dashboard/food-list">Inventory</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link onClick={handleNavbarShow} className="nav-link fs-5" to="/dashboard/order">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavbarShow} className="nav-link fs-5" to="/dashboard/staff-list">Staff</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar