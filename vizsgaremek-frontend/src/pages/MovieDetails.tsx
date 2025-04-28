import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import {
  addToWatchlist,
  getIsMovieOnWatchlist,
  removeFromWatchlist,
} from "../utils/watchlistApi";
import { FolderMinusIcon } from "@heroicons/react/20/solid";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import IconButton from "../components/IconButton";
import api from "../utils/api";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();
  const [error, setError] = useState("");
  const [isMovieIsOnWatchlist, setIsMovieIsOnWatchlist] =
    useState<boolean>(false);

  const handleRemoveFromWatchlist = async (
    event: React.MouseEvent<HTMLButtonElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      await removeFromWatchlist(movieId);
      setIsMovieIsOnWatchlist(false);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const handleAddToWatchlist = async (
    event: React.MouseEvent<HTMLButtonElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      addToWatchlist(movieId);
      setIsMovieIsOnWatchlist(true);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const checkIfMovieIsOnWatchlist = async (movieId: string) => {
    try {
      const isMovieOnWatchlist = await getIsMovieOnWatchlist(movieId);
      setIsMovieIsOnWatchlist(isMovieOnWatchlist);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  useEffect(() => {
    if (movie && movie.id) {
      checkIfMovieIsOnWatchlist(movie.id);
    }
  }, [movie]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get(`movies/${id}`);
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
        <div className="absolute top-[3rem] right-[1rem] ">
          {isMovieIsOnWatchlist ? (
            <IconButton
              onClick={(event) => handleRemoveFromWatchlist(event, movie.id)}
            >
              <FolderMinusIcon className="w-5 h-5" />
            </IconButton>
          ) : (
            <IconButton
              onClick={(event) => handleAddToWatchlist(event, movie.id)}
            >
              <FolderPlusIcon className="w-5 h-5" />
            </IconButton>
          )}
        </div>
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
