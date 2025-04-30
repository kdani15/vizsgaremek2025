import { SeenResponse } from "../types/Seen";
import api from "./api";

export async function getSeenMovies(): Promise<SeenResponse[]> {
  const res = await api.get("/seen");
  return res.data;
}

export const isMovieSeen = async (movieId: string): Promise<boolean> => {
  const res = await api.get(`seen/${movieId}`);
  return res.data;
};

export const addToSeenlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

  await api.post("seen/add", {
    movieId,
    userId,
  });
};

export const removeFromSeenlist = async (movieId: string) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return;
  }

  const userId = JSON.parse(user).id;

  await api.delete("seen/remove", {
    data: {
      movieId,
      userId,
    },
  });
};
