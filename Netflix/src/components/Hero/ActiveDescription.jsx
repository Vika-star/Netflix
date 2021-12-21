import style from './style.module.scss'

const ActiveDescription = ({ swiperIndex, movie, index }) => {
  
  if (swiperIndex === index) {
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

  return <div></div>;
}
export default ActiveDescription
