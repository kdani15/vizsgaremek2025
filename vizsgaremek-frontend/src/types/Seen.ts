import { Movie } from "./Movie";

export type SeenResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  movie: Movie;
};
