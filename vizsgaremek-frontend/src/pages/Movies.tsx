import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";
import api from "../utils/api";
import { getMoviesFetchAmount } from "../utils/getMoviesFetchAmount";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Movies() {
  const [newMovies, setNewMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (movies && movies.length && newMovies && newMovies.length) {
      setIsLoading(false);
    }
  }, [movies, newMovies, setIsLoading]);

  const fetchNewMovies = async () => {
    try {
      const res = await api.get("movies/latest", {
        params: {
          limit: getMoviesFetchAmount() / 2,
          offset: 0,
        },
      });
      setNewMovies(res.data);
    } catch (err) {
      console.error("Could not fetch movies: ", err);
    }
  };

  const fetchMovies = async () => {
    try {
      const res = await api.get("movies/all", {
        params: {
          limit: getMoviesFetchAmount(),
          offset: 0,
        },
      });
      setMovies(res.data);
    } catch (err) {
      console.error("Could not fetch movies: ", err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchNewMovies();
    fetchMovies();
  }, [setIsLoading]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 sm:px-6 lg:px-12 fadeIn max-w-[1440px] mx-auto">
      <div className="flex justify-between mt-10 mb-2">
        <h2>New movies:</h2>
        <Link to="/movies/latest">All new</Link>
      </div>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {newMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <p>We could not find any movies.</p>
      )}

      <div className="flex justify-between mt-10 mb-2">
        <h2>Other movies:</h2>
        <Link to="/movies/all">All other</Link>
      </div>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <p>We could not find any movies.</p>
      )}
    </div>
  );
}
