import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from './style.module.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



// import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules. In this example, 
// we will use Pagination and Coverflow
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const SwiperMovie = ({ movies }) => {

  // Array.from(movies).map((movieItem) => {
  //   let titles = movieItem.title;
  //   console.log(titles);
  //   return titles;
  // });

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  return (
    <Swiper className={style.swiper_container}
      autoplay={{ delay: 3000 }}
      effect="coverflow"
      grabCursor="true"
      centeredSlides="true"
      spaceBetween={0}
      slidesPerView={3}
      loop="true"
      pagination={{ clickable: true, dynamicBullets: true }}
      coverflowEffect={{
        rotate: 20,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}

    >
      {
        Array.from(movies).map((movieIndex, idx) => {
          return (<SwiperSlide key={idx}>
            <img src={`${baseImgUrl}/${size}${movieIndex.poster_path}`} alt="" />
            <div className={style.swiper_container__description_title}>
              {movieIndex.title}
            </div>
          </SwiperSlide>)
        })
      }
    </Swiper>



  );
};

export default SwiperMovie