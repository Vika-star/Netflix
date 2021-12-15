import { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pagination from 'swiper';
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import style from './style.module.scss';
import ActiveDescription from './ActiveDescription.jsx';
import AllMoviesContext from '../Context/AllMoviesContext';

SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);


const SwiperMovie = () => {

  const [swiperIndex, setSwiperIndex] = useState(0);
  const movies =useContext(AllMoviesContext);

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
        movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              <ActiveDescription swiperIndex={swiperIndex} movie={movie} index={index} />
            </SwiperSlide>)
        })
      }
    </Swiper>
  );
};

export default SwiperMovie
