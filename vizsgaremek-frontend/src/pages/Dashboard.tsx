import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:8000/movies", {
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

    fetchMovies();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between mt-10 mb-1">
        <h2>New movies:</h2>
        <Link to="/dashboard">All new</Link>
      </div>

      {movies.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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
