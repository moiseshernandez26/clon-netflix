import { useEffect, useRef, useState } from 'react'

import CardCourel from 'components/CardCarousel'

import './styles.css'
import { getPopularMovies, getGenreList } from 'services/movieService'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    requestData()
  }, [])

  const requestData = async () => {
    const genereList = await getGenreList()
    let moviesList = await getPopularMovies()
    console.log(moviesList)
    console.log(genereList)
    moviesList = moviesList.map((movie) => {
      movie.genre_ids = movie.genre_ids.map((idGenere) => {
        const aux = genereList.find((genere) => genere.id === idGenere)
        return aux.name
      })
      movie.clasification = movie.genre_ids.join(' . ')
      movie.quality = 'HD'
      movie.other = 'TV-MA'
      movie.name = movie.title
      movie.season = '1 temporada'
      movie.urlimage =
        'https://image.tmdb.org/t/p/original' + movie.backdrop_path
      return movie
    })
    setMovies(moviesList)
  }

  /* const moviesFistVersion = [
    {
      id: 1,
      name: 'La pelicula de armando',
      quality: 'HD',
      other: 'TV-MA',
      clasification: 'Accion . Aventura',
      season: '3 temporada',
      urlimage:
        'https://elcomercio.pe/resizer/l43Idy2ju4uIkzTHHbpLmZYpLwg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TRY2CQHRVFDJLIAGVTQHDQBJRM.jpg',
    },
  ] */

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
      <h1>Hola a todos</h1>
      <div className="container-info">
        <div className="square"></div>
      </div>
      <div className="container-info2"></div>
    </section>
  )
}

export default Home
