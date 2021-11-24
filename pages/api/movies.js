// MOVIE_DB_API_KEY
import axios from 'axios';

export const fetchMovieResults = async () => {
  const genres = await axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`
    )
    .then((responseData) => responseData.data.genres);

  const movieResult = [];

  for (const genre of genres) {
    await axios
      .get(
        // `https://api.themoviedb.org/3/discover/movie?api_key=bd60f4acd732dee52eeadf48612577a0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action&with_watch_monetization_types=flatrate`
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`
      )
      .then((responseData) => {
        movieResult.push({
          genre: genre.name,
          items: responseData.data.results,
        });
      });
  }

  return movieResult;
};

// Handle the movie preview on frontend. On hover load video link and click play video
const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const movieResult = await fetchMovieResults();
      res.send(movieResult);
    } catch (err) {
      res.send(err);
    }
    return;
  }

  return res.status(404).send({ error: 'Request method not allowed' });
};

export default handler;
