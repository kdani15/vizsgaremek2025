import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import api from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Search() {
  const { state } = useLocation();
  const { term } = state;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const res = await api.get("movies/search", {
          params: {
            title: term,
            limit: 21,
            offset: 0,
          },
        });
        setMovies(res.data);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [term]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="text-center my-10">
        Show results for: <span className="font-bold">{term}</span>
      </h1>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <p className="text-center">
          No results. Try to search for something else maybe.
        </p>
      )}
    </div>
  );
}
