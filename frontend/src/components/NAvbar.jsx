import React from 'react'
import { Link } from 'react-router-dom'

const NAvbar = () => {

    return (
        <>
            <div className="w-100 d-flex justify-content-center">
                <header className='container navbar-fixed-top'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link to='/' className="navbar-brand logo d-flex align-items-center me-auto me-lg-0">
                                <h1 className='blackColor'>Yummy<span>.</span></h1>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Restaurants</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn-login-table"
                                            to='/login'
                                        >Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link btn-book-a-table"
                                            to='/register'
                                        >Sign In</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default NAvbar