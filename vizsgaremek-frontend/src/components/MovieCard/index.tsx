import { EyeIcon, FolderMinusIcon } from "@heroicons/react/20/solid";
import {
  EyeIcon as EyeIconOutline,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToWatchlist,
  getIsMovieOnWatchlist,
  removeFromWatchlist,
} from "../../utils/watchlistApi";
import IconButton from "../IconButton";
import {
  addToSeenlist,
  isMovieSeen,
  removeFromSeenlist,
} from "../../utils/seenApi";

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
  releaseYear,
}: Props) {
  const [isMovieIsOnWatchlist, setIsMovieIsOnWatchlist] =
    useState<boolean>(false);
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      checkIfMovieIsOnWatchlist(id);
      checkIfMovieWasSeen(id);
    }
  }, [id]);

  const checkIfMovieIsOnWatchlist = async (movieId: string) => {
    try {
      const isMovieOnWatchlist = await getIsMovieOnWatchlist(movieId);
      setIsMovieIsOnWatchlist(isMovieOnWatchlist);
    } catch (err) {
      console.log("Failed to check if it was watched");
    }
  };

  const checkIfMovieWasSeen = async (movieId: string) => {
    try {
      const wasMovieWatched = await isMovieSeen(movieId);
      setIsSeen(wasMovieWatched);
    } catch (err) {
      console.log("Failed to fetch movies", err);
    }
  };

  const handleRemoveFromSeenlist = async (
    event: React.MouseEvent<HTMLButtonElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();
    try {
      await removeFromSeenlist(movieId);
      setIsSeen(false);
    } catch (err) {
      console.log("Failed to fetch movies", err);
    }
  };

  const handleAddToSeenlist = async (
    event: React.MouseEvent<HTMLButtonElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      addToSeenlist(movieId);
      setIsSeen(true);
    } catch (err) {
      console.log("Failed to fetch movies", err);
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
      console.log("Failed to fetch movies", err);
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
      console.log("Failed to fetch movies", err);
    }
  };

  return (
    <div>
      <Link
        to={`/movie/${id}`}
        style={{
          backgroundImage: `url(${thumbnailImg})`,
          textShadow: "0 1px 1px black",
        }}
        className="w-full h-[0] pb-[150%] bg-cover bg-center flex flex-col justify-between h-64 rounded-lg shadow-md text-white py-4 px-2 font-semibold uppercase opacity-90 hover:opacity-100 transition"
      >
        <div className="flex justify-end">
          {isSeen ? (
            <IconButton
              onClick={(event) => handleRemoveFromSeenlist(event, id)}
            >
              <EyeIcon className="w-5 h-5" />
            </IconButton>
          ) : (
            <IconButton onClick={(event) => handleAddToSeenlist(event, id)}>
              <EyeIconOutline className="w-5 h-5" />
            </IconButton>
          )}
          {isMovieIsOnWatchlist ? (
            <IconButton
              onClick={(event) => handleRemoveFromWatchlist(event, id)}
            >
              <FolderMinusIcon className="w-5 h-5" />
            </IconButton>
          ) : (
            <IconButton onClick={(event) => handleAddToWatchlist(event, id)}>
              <FolderPlusIcon className="w-5 h-5" />
            </IconButton>
          )}
        </div>
      </Link>
      <div className="py-3">
        <Link
          to={`/movie/${id}`}
          className="text-gray-400 hover:text-gray-300 transition"
        >
          {title} ({releaseYear})
        </Link>
      </div>
    </div>
  );
}
