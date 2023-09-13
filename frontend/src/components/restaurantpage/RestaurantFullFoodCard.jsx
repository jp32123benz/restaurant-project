import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import ImagesSlider from './ImagesSlider';

const RestaurantFullFoodCard = () => {
    const location = useLocation().state
    const navigate = useNavigate()
    const { foodImages } = location
    return (
        <>
            <section id="fullFoodCard">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className='goBackButtonInFullCard' onClick={() => navigate(-1)}>Go Back</div>
                        {/* <h1 className='text-center text-capitalize fs-1'>{location.foodName}</h1> */}
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            {
                                foodImages.map((val, ind) => {
                                    console.log(val);
                                    return (
                                        <SwiperSlide key={ind}>
                                            <img src={val.url} alt="..." width='50px' />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex flex-column text-capitalize handleNameofRestaurant">
                        <div className="handleCenterofRestaurant d-flex flex-column">
                            <div className='fs-1 hotelName'>{location.RestaurantName.username}</div>
                            <div className='gap-4 d-flex flex-column'>
                                <div className='fs-3'>Name: {location.foodName}</div>
                                <div className='fs-3'>Category: {location.foodCategory}</div>
                                <div className='fs-3'>Price: {location.price}</div>
                                {location.foodLabel === 'veg' ? (<RadioButtonCheckedIcon className='text-success fs-2' />) : (<RadioButtonCheckedIcon className='text-danger fs-2' />)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RestaurantFullFoodCard