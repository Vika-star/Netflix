import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from './style.module.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
import { useState } from 'react';

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);


const SwiperMovie = ({ movies }) => {

  const [swiperIndex, setSwiperIndex] = useState(0);

  const getActiveDescription = (movie, index) => {
    if (swiperIndex == index) {
      return (
        <div className={style.swiper_container__description}>
          <div className={style.swiper_container__description_line}></div>
          <div className={style.swiper_container__description__date}>
            Relase Date:
          </div>
          <div className={style.swiper_container__description_additional}>
            {(movie.release_date).replace(/-/g, ' ')}
          </div>
        </div>
      )
    }
  }
  return (
    <Swiper className={style.swiper_container}
      autoplay={{ delay: 3000 }}
      effect="coverflow"
      grabCursor="true"
      centeredSlides="true"
      spaceBetween={0}
      slidesPerView={3}
      loop="true"
      coverflowEffect={{
        rotate: 20,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
      onSlideChange={(swiper) => setSwiperIndex(swiper.realIndex)}
    >
      {
        Array.from(movies).map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              {getActiveDescription(movie, index)}
            </SwiperSlide>)
        })
      }
    </Swiper>



  );
};

export default SwiperMovie