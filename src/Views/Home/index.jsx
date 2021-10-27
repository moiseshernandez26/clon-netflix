import { useRef } from 'react'

import CardCourel from 'components/CardCarousel'
import BellIcon from 'Utils/Icons/BellIcon'
import TextNavBar from 'components/TextNavBar'
import NavBrowser from 'components/NavBrowser'

import './styles.css'

const Home = () => {
  const movies = [
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '1 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
  ]
  const refCarousel = useRef(null)

  const clickPrev = () => {
    refCarousel.current.scrollLeft -= refCarousel.current.offsetWidth
  }

  const clickPost = () => {
    refCarousel.current.scrollLeft += refCarousel.current.offsetWidth
    console.log(refCarousel.current.scrollLeft)
  }

  return (
    <section className="wrapper_home">
      <div className="peliculas-recomendadas contenedor">
        <div className="contenedor-titulo-controles">
          <h3>Películas Recomendadas</h3>
          <div className="indicadores"></div>
        </div>

        <div className="contenedor-principal">
          <button
            role="button"
            id="flecha-izquierda"
            className="flecha-izquierda"
            onClick={clickPrev}
          >
            <i className="fas fa-angle-left"></i>
          </button>

          <div className="contenedor-carousel" ref={refCarousel}>
            <div className="carousel">
              {movies.map((movie, index) => (
                <div key={index}>
                  <CardCourel
                    id={movie.id}
                    name={movie.name}
                    quality={movie.quality}
                    other={movie.quality}
                    clasification={movie.clasification}
                    season={movie.season}
                    urlimage={movie.urlimage}
                    key={index}
                  ></CardCourel>
                </div>
              ))}
            </div>
          </div>

          <button
            role="button"
            id="flecha-derecha"
            className="flecha-derecha"
            onClick={clickPost}
          >
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="container-carousel"></div>
      <h1>Hola master</h1>
      <TextNavBar text="Texto"></TextNavBar>
      <NavBrowser></NavBrowser>

      <BellIcon />
    </section>
  )
}

export default Home
