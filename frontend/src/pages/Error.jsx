import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/error/error.css";

const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <div >
                <main id="Error" >
                    <div className="container" >
                        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center" >
                            <h1 > 404 </h1>
                            <h2 >
                                The page you are looking
                                for doesn 't exist.</h2>
                            <Link className="btn btn-danger" onClick={() => navigate(-1)} >
                                Go Back
                            </Link>
                            <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
                        </section>
                    </div >
                </main>

                <Link to="#" className="back-to-top d-flex align-items-center justify-content-center" >
                    <i className="bi bi-arrow-up-short" > </i>
                </Link>
                {/* < /Link >  */}
            </div>
        </>
    );
};

export default Error;