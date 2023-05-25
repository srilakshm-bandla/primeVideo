import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-list-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MovieSlider moviesList={actionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
