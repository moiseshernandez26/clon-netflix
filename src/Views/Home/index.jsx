import './styles.css'

import CardCourel from 'components/CardCarousel'

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
  ]
  return (
    <div>
      {movies.map((movie, index) => (
        <CardCourel
          id={movie.id}
          name={movie.name}
          quality={movie.quality}
          other={movie.quality}
          clasification={movie.clasification}
          season={movie.season}
          key={index}
          urlimage={movie.urlimage}
        ></CardCourel>
      ))}
    </div>
  )
}

export default Home
