import axiosDefault from 'axios'

const APIKEY = '2dd7fcf348b01e4ca5532a4b05973d78'

const axios = axiosDefault.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const getPopularMovies = async () => {
  const res = await axios.get(
    `/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
  )
  return res.data.results
}

export const getGenreList = async () => {
  const res = await axios.get(`/genre/movie/list?api_key=${APIKEY}`)
  return res.data.genres
}
