import React from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Events = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    return (
        <>
            <section id="events" className="events">
                <div className="container-fluid" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Events</h2>
                        <p>Share <span>Your Moments</span> In Our Restaurant</p>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}>
                        <SwiperSlide>
                            <div className='img-fluid imgswiperevent d-flex flex-column justify-content-end' style={{ backgroundImage: "url(assets/img/events-1.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <h3>Custom Parties</h3>
                                <div className="price align-self-start">$99</div>
                                <p className="description">
                                    Quo corporis voluptas ea ad. Consectetur inventore sapiente ipsum voluptas eos omnis facere. Enim
                                    facilis veritatis id est rem repudiandae nulla expedita quas.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='img-fluid imgswiperevent d-flex flex-column justify-content-end' style={{ backgroundImage: "url(assets/img/events-2.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <h3>Private Parties</h3>
                                <div className="price align-self-start">$289</div>
                                <p className="description">
                                    In delectus sint qui et enim. Et ab repudiandae inventore quaerat doloribus. Facere nemo vero est ut
                                    dolores ea assumenda et. Delectus saepe accusamus aspernatur.
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='img-fluid imgswiperevent d-flex flex-column justify-content-end' style={{ backgroundImage: "url(assets/img/events-3.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <h3>Birthday Parties</h3>
                                <div className="price align-self-start">$499</div>
                                <p className="description">
                                    Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam
                                    ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div >
            </section >
        </>
    )
}

export default Events