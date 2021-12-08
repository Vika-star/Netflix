import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from './style.module.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {
        Array.from(movies).map((movieIndex, idx) => {
          return(<SwiperSlide key={idx}>
            <img src={`${baseImgUrl}/${size}${movieIndex.poster_path}`} alt="" />
            {movieIndex.title}
          </SwiperSlide>)
        })
      }
    </Swiper>



  );
};

export default SwiperMovie