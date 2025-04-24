import { FolderMinusIcon } from "@heroicons/react/20/solid";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToWatchlist,
  getIsMovieOnWatchlist,
  removeFromWatchlist,
} from "../../utils/watchlistApi";
import IconButton from "../IconButton";

type Props = {
  id: string;
  title: string;
  thumbnailImg: string;
  releaseYear: string;
  seen: boolean;
  onList: boolean;
  onRemove?: () => Promise<void>;
};

export default function MovieCard({
  id,
  title,
  thumbnailImg,
  onRemove,
}: Props) {
  const [error, setError] = useState("");
  const [isMovieIsOnWatchlist, setIsMovieIsOnWatchlist] =
    useState<boolean>(false);

  useEffect(() => {
    if (id) {
      checkIfMovieIsOnWatchlist(id);
    }
  }, [id]);

  const checkIfMovieIsOnWatchlist = async (movieId: string) => {
    try {
      const isMovieOnWatchlist = await getIsMovieOnWatchlist(movieId);
      setIsMovieIsOnWatchlist(isMovieOnWatchlist);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const handleRemoveFromWatchlist = async (
    event: React.MouseEvent<HTMLButtonElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      await removeFromWatchlist(movieId);
      setIsMovieIsOnWatchlist(false);

      if (onRemove) onRemove();
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

  return (
    <Link
      to={`/movie/${id}`}
      style={{
        backgroundImage: `url(${thumbnailImg})`,
        textShadow: "0 1px 1px black",
      }}
      className="bg-cover bg-center flex flex-col justify-between h-64 rounded-lg shadow-md text-white p-4 font-semibold uppercase opacity-90 hover:opacity-100 transition"
    >
      <div className="flex justify-end opacity-60 hover:opacity-100 transition">
        {isMovieIsOnWatchlist ? (
          <IconButton onClick={(event) => handleRemoveFromWatchlist(event, id)}>
            <FolderMinusIcon className="w-5 h-5" />
          </IconButton>
        ) : (
          <IconButton onClick={(event) => handleAddToWatchlist(event, id)}>
            <FolderPlusIcon className="w-5 h-5" />
          </IconButton>
        )}
      </div>
      <span>{title}</span>
    </Link>
  );
}
