import './styles.css'
const CardCourel = () => {
  // const [id, setId] = useState(1)
  // const [name, setname] = useState('La vida de Armando')
  const quality = 'HD'
  const season = '1 temporada'
  const other = 'TV-MA'
  const clasification = 'Inspiradora . Accion'

  return (
    <div className="general-container">
      <div>
        <img
          className="image-container"
          src="/assets/img/CardCarousel/PeliculaDeArmando.jpeg"
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
          <span className="text-other"> {other} </span>
          <span className="text">{season}</span>
          <span className="text-other">{quality}</span>
        </div>
        <div className="clasification-container">
          <span className="text">{clasification}</span>
        </div>
      </div>
    </div>
  )
}
// test
export default CardCourel
