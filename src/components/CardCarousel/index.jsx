import PropTypes from 'prop-types'

import './styles.css'
const CardCourel = ({
  id,
  name,
  quality,
  other,
  clasification,
  season,
  urlimage,
}) => {
  return (
    <div id={id} className="size-container general-container">
      <div id={name}>
        <img
          className="size-container image-container"
          src={urlimage}
          alt="Movie Img"
        ></img>
      </div>
      <div className="subgeneral-container">
        <div className="buttons-container">
          <div className="buttons-subContainer">
            <a href="" title="Play">
              <img
                src="/assets/img/CardCarousel/Play.svg"
                alt="PlayButton"
                className="buttons-play"
              ></img>
            </a>
            <a href="" title="Agregar">
              <img
                src="/assets/img/CardCarousel/Plus.svg"
                alt="PlusButton"
                className="buttons"
              ></img>
            </a>
            <a href="" title="Me gusta">
              <img
                src="/assets/img/CardCarousel/Like.svg"
                alt="LikeButton"
                className="buttons"
              ></img>
            </a>
            <a href="" title="No me gusta">
              <img
                src="/assets/img/CardCarousel/Unlike.svg"
                alt="UnlikeButton"
                className="buttons"
              ></img>
            </a>
          </div>
          <a href="" title="Detalles">
            <img
              src="/assets/img/CardCarousel/Down.svg"
              alt="DownButton"
              className="buttons"
            ></img>
          </a>
        </div>
        <div className="description-container">
          <span className="text-status">Nuevo</span>
          <span className="text-card-carousel text-other"> {other} </span>
          <span className="text-card-carousel">{season}</span>
          <span className="text-card-carousel text-other">{quality}</span>
        </div>
        <div className="clasification-container">
          <span className="text-card-carousel">{clasification}</span>
        </div>
      </div>
    </div>
  )
}

CardCourel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  clasification: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  urlimage: PropTypes.string.isRequired,
}

export default CardCourel
