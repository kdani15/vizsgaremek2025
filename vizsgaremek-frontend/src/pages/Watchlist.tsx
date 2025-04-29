import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";
import api from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Watchlist() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("watchlist", {
        params: {
          limit: 21,
          offset: 0,
        },
      });
      setMovies(res.data.map((watchlist: any) => watchlist.movie));
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="mt-10 text-center text-3xl mb-10">Watchlist</h1>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} onRemove={fetchMovies} />
          ))}
        </div>
      ) : (
        <p>We could not find any movies.</p>
      )}
    </div>
  );
}
