import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const certs = [
  { id: 1, title: '1. NodeJs Course Express, socketIo and MongoDB', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085357/certificate_2_d3sdrt.jpg' },
  { id: 2, title: '2. Engineering Statics', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085357/certificate_5_ecedr2.jpg' },
  { id: 3, title: '3. Java', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085356/certificate_6_kf2bta.jpg' },
  { id: 4, title: '4. Web Development Masterclass', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085357/certificate_1_nr8cis.jpg' },
  { id: 5, title: '5. C Programming', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085357/certificate_7_aq3tpj.jpg' },
  { id: 6, title: '6. Database Engineering', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085358/certificate_3_eoynad.jpg' },
  { id: 7, title: '7. Javascript with HTML,CSS', img: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1774085358/certificate_4_c3w3np.jpg' }
];

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
          {certs.map((cert) => (
            <SwiperSlide key={cert.id} className="swiper-slide">
              <div className="card">
                <img src={cert.img} alt={cert.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 Dynamic Label */}
        <div className="cert-label">
          <h3 key={activeIndex}>{certs[activeIndex].title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Certifications;