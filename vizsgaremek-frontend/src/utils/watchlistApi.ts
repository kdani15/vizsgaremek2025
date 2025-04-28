import api from "./api";

export const getIsMovieOnWatchlist = async (
  movieId: string
): Promise<boolean> => {
  const res = await api.get(`watchlist/${movieId}`);
  return res.data;
};

export const addToWatchlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

  await api.post(
    "watchlist/add",
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
};

export const removeFromWatchlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

  await api.delete("watchlist/remove", {
    data: {
      movieId,
      userId,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};
