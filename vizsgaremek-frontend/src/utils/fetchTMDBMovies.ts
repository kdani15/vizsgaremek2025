import axios from "axios";
import { Movie } from "../types/Movie";

// Replace with your own TMDb API access token
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTMDBMovies(): Promise<Movie[] | undefined> {
  const movieTitles = [
    "Avatar",
    "The Dark Knight",
    "Inception",
    "The Lord of the Rings: The Return of the King",
    "Gladiator",
    "The Departed",
    "No Country for Old Men",
    "Slumdog Millionaire",
    "The King's Speech",
    "Black Swan",
    "The Social Network",
    "The Artist",
    "Argo",
    "12 Years a Slave",
    "Birdman",
    "Spotlight",
    "Moonlight",
    "The Shape of Water",
    "Green Book",
    "Parasite",
    "Nomadland",
    "CODA",
    "Everything Everywhere All at Once",
    "Oppenheimer",
    "Barbie",
    "The Irishman",
    "Once Upon a Time in Hollywood",
    "1917",
    "Jojo Rabbit",
    "Ford v Ferrari",
    "Joker",
    "Marriage Story",
    "Little Women",
    "Knives Out",
    "Soul",
    "Tenet",
    "Dune",
    "The Power of the Dog",
    "West Side Story",
    "Licorice Pizza",
    "Top Gun: Maverick",
    "The Batman",
    "Elvis",
    "The Whale",
    "TÁR",
    "Women Talking",
    "The Fabelmans",
    "Triangle of Sadness",
    "All Quiet on the Western Front",
    "Everything Everywhere All at Once",
    "The Banshees of Inisherin",
    "Avatar: The Way of Water",
    "The Menu",
    "Glass Onion: A Knives Out Mystery",
    "Black Panther: Wakanda Forever",
    "Doctor Strange in the Multiverse of Madness",
    "Thor: Love and Thunder",
    "Ant-Man and the Wasp: Quantumania",
    "Guardians of the Galaxy Vol. 3",
    "Spider-Man: No Way Home",
    "Shang-Chi and the Legend of the Ten Rings",
    "Eternals",
    "Black Widow",
    "The Suicide Squad",
    "Wonder Woman 1984",
    "Zack Snyder's Justice League",
    "The Flash",
    "Aquaman and the Lost Kingdom",
    "Shazam! Fury of the Gods",
    "The Marvels",
    "The Hunger Games: The Ballad of Songbirds & Snakes",
    "Dune: Part Two",
    "Mission: Impossible – Dead Reckoning Part One",
    "John Wick: Chapter 4",
    "Fast X",
    "Indiana Jones and the Dial of Destiny",
    "Transformers: Rise of the Beasts",
    "The Little Mermaid",
    "Wonka",
    "Napoleon",
    "Killers of the Flower Moon",
    "Poor Things",
    "The Holdovers",
    "Maestro",
    "The Color Purple",
    "Next Goal Wins",
    "The Killer",
    "Saltburn",
    "The Creator",
    "The Marvels",
    "Wish",
    "Wish Dragon",
    "Raya and the Last Dragon",
    "Encanto",
    "Turning Red",
    "Luca",
    "Lightyear",
    "Elemental",
    "Strange World",
    "Wish",
    "Soul",
    "Onward",
    "Frozen II",
    "Toy Story 4",
    "Coco",
    "Moana",
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

      if (movie) {
        const movieData = {
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
  console.log("movies", JSON.stringify(movies));
  return movies as Movie[];

  // console.log(JSON.stringify(movies, null, 2));
}
