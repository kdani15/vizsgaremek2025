import { Movie } from "./Movie";

export type WatchlistResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  movie: Movie;
};
