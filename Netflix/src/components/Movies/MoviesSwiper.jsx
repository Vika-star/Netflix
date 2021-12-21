import Movie from './Movie'
import { Swiper, SwiperSlide } from 'swiper/react';
import Pagination from 'swiper';
import SwiperCore, { Autoplay } from "swiper";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import style from './style.module.scss';

SwiperCore.use([Pagination, Autoplay]);


const MoviesSwiper = ({ movies }) => {

    return (
        <Swiper className={style.swiper_container}
            autoplay={{ delay: 3000 }}
            pagination
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={0}
            slidesPerView={2.5}
            loop="true"
            breakpoints={{
                992: {
                  spaceBetween: 0,
                  slidesPerView: 2.5,
                },
                750: {
                  spaceBetween: 80,
                  slidesPerView: 2,
                },
                580: {
                  spaceBetween: 50,
                  slidesPerView: 1.5,
                },
                400: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                300: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
              }}
        >
            {
                movies.map((movie, index) =>
                    <SwiperSlide key={index}>
                        <Movie movie={movie}></Movie>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default MoviesSwiper