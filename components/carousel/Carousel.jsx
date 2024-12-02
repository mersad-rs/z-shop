import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { css } from '@emotion/css';

const Carousel = () => {
    const slides = [
      { id: 1, image: "/slidethree.jpg" },
      { id: 2, image: "/slidetwo.jpg"},
      { id: 3, image: "/slideone.jpg"},
    ];
  
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide  className={css`display:flex;justify-content:center;align-items:center`}><img src='/slide1.jpg' className={css`width:90%;border-radius:30px` } /></SwiperSlide>
        <SwiperSlide  className={css`display:flex;justify-content:center;align-items:center`}><img src='/slide2.jpg' className={css`width:90%;border-radius:30px`} /></SwiperSlide>
        <SwiperSlide  className={css`display:flex;justify-content:center;align-items:center`}><img src='/slide3.jpg' className={css`width:90%;border-radius:30px`} /></SwiperSlide>
      </Swiper>
    );
  };
  
  export default Carousel;
