import React from 'react'
import { PlayCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const HeroText = () => {
    return (
        <>
            <div className="heroPage">
                <section id="hero" className="hero d-flex align-items-center section-bg container">
                    <div className="container">
                        <div className="row justify-content-between gy-5">
                            <div
                                className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                                <h2 data-aos="fade-up" className='amantic'>Enjoy Your Healthy<br />Delicious Food</h2>
                                <p data-aos="fade-up" data-aos-delay="100">Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                                    eveniet. Eum quas beatae cumque eum quaerat.</p>
                                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <Link to="#book-a-table" className="btn-book-a-table p-2">Order Now</Link>
                                    <Link to="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                                        className="glightbox btn-watch-video d-flex align-items-center"><PlayCircle className='text-danger fs-3' /><span>Watch Video</span></Link>
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                                <img src="assets/img/hero-img.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroText