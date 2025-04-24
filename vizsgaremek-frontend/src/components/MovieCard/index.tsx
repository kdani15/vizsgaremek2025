import { FolderMinusIcon } from "@heroicons/react/20/solid";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  thumbnailImg: string;
  releaseYear: string;
  seen: boolean;
  onList: boolean;
};

export default function MovieCard({
  id,
  title,
  thumbnailImg,
  releaseYear,
}: Props) {
  const [error, setError] = useState("");
  const [isMovieIsOnWatchlist, setIsMovieIsOnWatchlist] =
    useState<boolean>(false);

  useEffect(() => {
    checkIfMovieIsOnWatchlist(id);
  }, [id]);

  const checkIfMovieIsOnWatchlist = async (movieId: string) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/watchlist/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      setIsMovieIsOnWatchlist(res.data);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const removeFromWatchlist = async (
    event: React.MouseEvent<SVGSVGElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();

    const user = localStorage.getItem("user");

    if (!user) {
      return;
    }

    const userId = JSON.parse(user).id;

    try {
      await axios.delete("http://localhost:8000/watchlist/remove", {
        data: {
          movieId,
          userId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      setIsMovieIsOnWatchlist(false);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const addToWatchlist = async (
    event: React.MouseEvent<SVGSVGElement>,
    movieId: string
  ) => {
    event.stopPropagation();
    event.preventDefault();

    const user = localStorage.getItem("user");

    if (!user) {
      return;
    }

    const userId = JSON.parse(user).id;

    try {
      await axios.post(
        "http://localhost:8000/watchlist/add",
        {
          movieId,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
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
          <FolderMinusIcon
            className="w-5 h-5"
            onClick={(e: React.MouseEvent<SVGSVGElement>) =>
              removeFromWatchlist(e, id)
            }
          />
        ) : (
          <FolderPlusIcon
            className="w-5 h-5"
            onClick={(e: React.MouseEvent<SVGSVGElement>) =>
              addToWatchlist(e, id)
            }
          />
        )}
      </div>
      <span>{title}</span>
    </Link>
  );
}
