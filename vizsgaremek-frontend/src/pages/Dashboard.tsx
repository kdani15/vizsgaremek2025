import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Dashboard() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await api.get("movies", {
        params: {
          limit: 21,
          offset: 0,
        },
      });
      setMovies(res.data);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between mt-10 mb-2">
        <h2>New movies:</h2>
        <Link to="/dashboard">All new</Link>
      </div>

      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:grid-cols-6 gap-4">
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
