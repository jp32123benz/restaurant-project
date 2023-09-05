import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { ChatLeftQuote, ChatRightQuote, StarFill } from 'react-bootstrap-icons'

const Testimonials = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    return (
        <>
            <section id="testimonials" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Testimonials</h2>
                        <p>What Are They <span>Saying About Us</span></p>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}>
                        <SwiperSlide className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <ChatLeftQuote className='quoteColor leftquote' />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <ChatRightQuote className='quoteColor rightquote' />
                                        </p>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <div className="stars">
                                            <StarFill /><StarFill /><StarFill /><StarFill /><StarFill />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <ChatLeftQuote className='quoteColor leftquote' />
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                                            malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <ChatRightQuote className='quoteColor rightquote' />
                                            {/* <i className="bi bi-quote quote-icon-right"></i> */}
                                        </p>
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <div className="stars">
                                            <StarFill /><StarFill /><StarFill /><StarFill /><StarFill />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <ChatLeftQuote className='quoteColor leftquote' />
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                                            minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <ChatRightQuote className='quoteColor rightquote' />
                                            {/* <i className="bi bi-quote quote-icon-right"></i> */}
                                        </p>
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <div className="stars">
                                            <StarFill /><StarFill /><StarFill /><StarFill /><StarFill />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="testimonial-item">
                            <div className="row gy-4 justify-content-center">
                                <div className="col-lg-6">
                                    <div className="testimonial-content">
                                        <p>
                                            <ChatLeftQuote className='quoteColor leftquote' />
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                                            culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                                            quid.
                                            <ChatRightQuote className='quoteColor rightquote' />
                                            {/* <i className="bi bi-quote quote-icon-right"></i> */}
                                        </p>
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <div className="stars">
                                            <StarFill /><StarFill /><StarFill /><StarFill /><StarFill />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 text-center">
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div >
            </section >

        </>
    )
}

export default Testimonials