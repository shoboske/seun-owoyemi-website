import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { listClients } from '../lib/clients';

function Clients() {

    const clients = listClients();

    return (
        <div className="container">

            <div className="js-swiper-hero-clients swiper text-center">
                <Swiper slidesPerView={3}>
                    {clients && clients.map((client, index) =>
                        <SwiperSlide key={index}>
                            <img className="avatar avatar-lg avatar-4x3" src={client.logo} alt={client.name} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}

export default Clients