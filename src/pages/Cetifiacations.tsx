import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import certifications from '../data/certifications';

function Certifications() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='certifications '>
      <div className="cert-slider">
        <h2>My Certifications</h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper_container"
        >
          {certifications.map((cert) => (
            <SwiperSlide key={cert.id} className="swiper-slide">
              <div className="card">
                <img src={cert.img} alt={cert.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 Dynamic Label */}
        <div className="cert-label">
          <h3 key={activeIndex}>{certifications[activeIndex].title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Certifications;