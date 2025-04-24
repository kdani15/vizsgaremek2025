import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return movie ? (
    <>
      <header
        className="relative h-[40vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.posterImg})` }}
      >
        <div className="absolute left-[3rem] bottom-[1rem] ">
          <h1
            className="text-center text-3xl"
            style={{ textShadow: "0 1px 1px black" }}
          >
            {movie.title}
          </h1>
          <h2>({movie.releaseYear})</h2>
        </div>
      </header>
      <section className="px-4 sm:px-6 lg:px-12 py-5">
        <h2 className="underline text-xl mb-3">About the movie:</h2>
        <p>{movie.description}</p>
      </section>
    </>
  ) : (
    <p>Could not find any movies you are looking for.</p>
  );
}
