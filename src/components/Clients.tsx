import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
    return (
        <div className="container">

            <div className="js-swiper-hero-clients swiper text-center">
                <Swiper slidesPerView={3}>
                    <SwiperSlide>
                        <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/fitbit-dark.svg" alt="Logo" />
                    </SwiperSlide>

                    <SwiperSlide >
                        <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/forbes-dark.svg" alt="Logo" />
                    </SwiperSlide>

                    <SwiperSlide >
                        <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/mailchimp-dark.svg" alt="Logo" />
                    </SwiperSlide>

                    <SwiperSlide >
                        <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/layar-dark.svg" alt="Logo" />
                    </SwiperSlide>

                    <SwiperSlide >
                        <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/hubspot-dark.svg" alt="Logo" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Clients