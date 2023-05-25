// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  const {moviesList} = props

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </>
  )
}
export default MovieSlider
