import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
import { useEffect, useState } from "react";
import { FolderMinusIcon, EyeIcon } from "@heroicons/react/20/solid";
import {
  FolderPlusIcon,
  EyeIcon as EyeIconOutline,
} from "@heroicons/react/24/outline";
import IconButton from "../components/IconButton";
import api from "../utils/api";
import LoadingSpinner from "../components/LoadingSpinner";
import { useMovieStatus } from "../context/MovieStatusContext";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { watchlist, seenList, updateWatchlist, updateSeenlist } =
    useMovieStatus();
  const isMovieOnWatchlist = watchlist[id!] ?? false;
  const isSeen = seenList[id!] ?? false;

  const handleAddToWatchlist = () => {
    updateWatchlist(id!, true);
  };

  const handleRemoveFromWatchlist = () => {
    updateWatchlist(id!, false);
  };

  const handleAddToSeenlist = () => {
    updateSeenlist(id!, true);
  };

  const handleRemoveFromSeenlist = () => {
    updateSeenlist(id!, false);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const res = await api.get(`movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Failed to fetch movies");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [id]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : movie ? (
    <div className="fadeIn">
      <header
        className="relative h-[40vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.posterImg})` }}
      >
        <div className="absolute top-[3rem] right-[1rem] ">
          {isSeen ? (
            <IconButton onClick={handleRemoveFromSeenlist}>
              <EyeIcon className="w-5 h-5" />
            </IconButton>
          ) : (
            <IconButton onClick={handleAddToSeenlist}>
              <EyeIconOutline className="w-5 h-5" />
            </IconButton>
          )}
          {isMovieOnWatchlist ? (
            <IconButton onClick={handleRemoveFromWatchlist}>
              <FolderMinusIcon className="w-5 h-5" />
            </IconButton>
          ) : (
            <IconButton onClick={handleAddToWatchlist}>
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
    </div>
  ) : (
    <p>Could not find any movies you are looking for.</p>
  );
}
