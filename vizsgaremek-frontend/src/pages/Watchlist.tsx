import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";
import api from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { getMoviesFetchAmount } from "../utils/getMoviesFetchAmount";

export default function Watchlist() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("watchlist", {
        params: {
          limit: getMoviesFetchAmount() * 4,
          offset: 0,
        },
      });
      setMovies(res.data.map((watchlist: any) => watchlist.movie));
    } catch (err) {
      console.error("Failed to fetch movies: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = (movieId: string) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 sm:px-6 lg:px-12 fadeIn max-w-[1440px] mx-auto">
      <h1 className="mt-10 text-center text-3xl mb-10">
        Movies you would like to watch
      </h1>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onRemoveFromWatchlist={() => handleRemove(movie.id)}
            />
          ))}
        </div>
      ) : (
        <p>We could not find any movies.</p>
      )}
    </div>
  );
}
