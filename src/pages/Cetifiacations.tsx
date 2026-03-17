import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const certs = [
  { id: 1, title: '1. AWS Certification', img: 'https://intelleecollege.com/wp-content/uploads/2022/01/Diploma-Design-1024x724.png' },
  { id: 2, title: '2. React Certification', img: 'https://cdn.create.vista.com/downloads/a22af387-6451-4a29-89c8-9196b322744e_1024.jpeg' },
  { id: 3, title: '3. Docker Certification', img: 'https://www.momentummechanical.com/images/certificate01.jpg' },
    { id: 4, title: '4. AWS Certification', img: 'https://www.classcentral.com/report/wp-content/uploads/2022/02/hackerrank-certificate.png' },
  { id: 5, title: '5. React Certification', img: 'https://xaltiusacademy.com/wp-content/uploads/2023/04/Sample-Xaltius-Certificate-400x250.png' },
  { id: 6, title: '6. Docker Certification', img: 'https://media.licdn.com/dms/image/v2/D5622AQEx5TwqL3inNw/feedshare-shrink_800/feedshare-shrink_800/0/1707308420807?e=2147483647&v=beta&t=JorzpZpDOAiJXwMXfFqRI82XRqaW0msbHVTa0nH7qII' }
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
         onSlideChange={(swiper:any) => setActiveIndex(swiper.realIndex)}
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