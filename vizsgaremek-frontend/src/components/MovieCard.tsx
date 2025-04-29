import { EyeIcon, FolderMinusIcon } from "@heroicons/react/20/solid";
import {
  EyeIcon as EyeIconOutline,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import { useMovieStatus } from "../context/MovieStatusContext";

type Props = {
  id: string;
  title: string;
  thumbnailImg: string;
  releaseYear: string;
  onRemove?: () => Promise<void>;
};

export default function MovieCard({
  id,
  title,
  thumbnailImg,
  releaseYear,
}: Props) {
  const { watchlist, seenList, updateWatchlist, updateSeenlist } =
    useMovieStatus();
  const isMovieOnWatchlist = watchlist[id] ?? false;
  const isSeen = seenList[id] ?? false;

  const handleAddToWatchlist = () => {
    updateWatchlist(id, true);
  };

  const handleRemoveFromWatchlist = () => {
    updateWatchlist(id, false);
  };

  const handleAddToSeenlist = () => {
    updateSeenlist(id, true);
  };

  const handleRemoveFromSeenlist = () => {
    updateSeenlist(id, false);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${thumbnailImg})`,
          textShadow: "0 1px 1px black",
        }}
        className="relative w-full h-[0] pb-[150%] bg-cover bg-center flex flex-col justify-between h-64 rounded-lg shadow-md text-white py-4 px-2 font-semibold uppercase opacity-90 hover:opacity-100 transition"
      >
        <Link
          to={`/movie/${id}`}
          className="absolute w-full h-full top-0 left-0"
        ></Link>
        <div className="absolute right-[0.5em] top-[1em]">
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
      </div>
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
