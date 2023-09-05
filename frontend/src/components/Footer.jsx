import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <>
            <footer id="footer" className="footer">

                <div className="container">
                    <div className="row gy-3">
                        <div className="col-lg-3 col-md-6 d-flex">
                            <i className="bi bi-geo-alt icon"></i>
                            <div>
                                <h4>Address</h4>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022 - US<br />
                                </p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-telephone icon"></i>
                            <div>
                                <h4>Reservations</h4>
                                <p>
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links d-flex">
                            <i className="bi bi-clock icon"></i>
                            <div>
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sat: 11AM</strong> - 23PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
                                <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">Yummy</a>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer