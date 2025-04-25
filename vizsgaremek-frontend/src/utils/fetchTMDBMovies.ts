import axios from "axios";
import { Movie } from "../types/Movie";

// Replace with your own TMDb API access token
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTMDBMovies(): Promise<Movie[] | undefined> {
  const movieTitles = [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "The Shawshank Redemption",
    "Fight Club",
    "The Matrix",
    "Forrest Gump",
    "Pulp Fiction",
    "The Godfather",
    "The Godfather: Part II",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Gladiator",
    "The Lion King",
    "Avengers: Endgame",
    "Titanic",
    "Shutter Island",
    "The Prestige",
    "Joker",
    "Parasite",
    "Django Unchained",
    "Whiplash",
  ];

  const movies = [];

  for (const title of movieTitles) {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: title,
          language: "en-US",
        },
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      const movie = response.data.results[0];
      console.log("movie", movie);

      if (movie) {
        const movieData = {
          id: movie.id,
          title: movie.title,
          releaseYear: movie.release_date.split("-")[0], // Extract the year
          description: movie.overview,
          posterImg: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          thumbnailImg: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
        };
        movies.push(movieData);
      }
    } catch (error) {
      console.error(`Error fetching data for ${title}:`, error);
    }
  }
  return movies as Movie[];

  // console.log(JSON.stringify(movies, null, 2));
}
