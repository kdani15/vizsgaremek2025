import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:8000/watchlist", {
        params: {
          limit: 21,
          offset: 0,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      setMovies(res.data.map((watchlist: any) => watchlist.movie));
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="mt-10 text-center text-3xl mb-10">Watchlist</h1>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6 gap-4">
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
