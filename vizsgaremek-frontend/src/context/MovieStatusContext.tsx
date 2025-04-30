import { createContext, useContext, useEffect, useState } from "react";
import {
  addToSeenlist,
  getSeenMovies,
  removeFromSeenlist,
} from "../utils/seenApi";
import {
  addToWatchlist,
  getWatchlistMovies,
  removeFromWatchlist,
} from "../utils/watchlistApi";

type MovieStatusContextType = {
  watchlist: Record<string, boolean>;
  seenList: Record<string, boolean>;
  updateWatchlist: (movieId: string, isOnList: boolean) => void;
  updateSeenlist: (movieId: string, isSeen: boolean) => void;
  isLoading: boolean;
};

const MovieStatusContext = createContext<MovieStatusContextType | undefined>(
  undefined
);

export const MovieStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [watchlist, setWatchlist] = useState<Record<string, boolean>>({});
  const [seenList, setSeenList] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const [watch, seen] = await Promise.all([
          getWatchlistMovies(),
          getSeenMovies(),
        ]);

        const watchlistIds = watch.map((item) => item.movie.id);
        const seenlistIds = seen.map((item) => item.movie.id);

        setWatchlist(Object.fromEntries(watchlistIds.map((id) => [id, true])));
        setSeenList(Object.fromEntries(seenlistIds.map((id) => [id, true])));
      } catch (err) {
        console.error("Failed to fetch movie status", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadStatus();
  }, []);

  const updateWatchlist = (movieId: string, isOnList: boolean) => {
    if (isOnList) {
      addToWatchlist(movieId);
    } else {
      removeFromWatchlist(movieId);
    }
    setWatchlist((prev) => ({ ...prev, [movieId]: isOnList }));
  };

  const updateSeenlist = (movieId: string, isSeen: boolean) => {
    if (isSeen) {
      addToSeenlist(movieId);
    } else {
      removeFromSeenlist(movieId);
    }
    setSeenList((prev) => ({ ...prev, [movieId]: isSeen }));
  };

  return (
    <MovieStatusContext.Provider
      value={{
        watchlist,
        seenList,
        updateWatchlist,
        updateSeenlist,
        isLoading,
      }}
    >
      {children}
    </MovieStatusContext.Provider>
  );
};

export const useMovieStatus = () => {
  const context = useContext(MovieStatusContext);
  if (!context)
    throw new Error("useMovieStatus must be used within MovieStatusProvider");
  return context;
};
