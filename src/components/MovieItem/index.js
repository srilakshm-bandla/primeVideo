// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movies-container">
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="blue" />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
