import axios from "axios";

export const getIsMovieOnWatchlist = async (
  movieId: string
): Promise<boolean> => {
  const res = await axios.get(`http://localhost:8000/watchlist/${movieId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  return res.data;
};

export const addToWatchlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

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
};

export const removeFromWatchlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

  await axios.delete("http://localhost:8000/watchlist/remove", {
    data: {
      movieId,
      userId,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
};
