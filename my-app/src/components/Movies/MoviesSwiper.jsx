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


const MoviesSwiper = ({ movies, setShowPopup }) => {

    return (
        <Swiper className={style.swiper_container}
            autoplay={{ delay: 3000 }}
            pagination
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={0}
            slidesPerView={2.5}
            loop="true"
            coverflowEffect={{
                rotate: 20,
                stretch: 25,
                depth: 250,
                modifier: 1,
                slideShadows: false,
            }}
        >
            {
                movies.map((movie, index) =>
                    <SwiperSlide key={index}>
                        <Movie movie={movie} setShowPopup={setShowPopup}></Movie>
                    </SwiperSlide>
                )
            }
        </Swiper>



    );
};

export default MoviesSwiper