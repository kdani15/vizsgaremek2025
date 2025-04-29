export type Movie = {
  id: string;
  title: string;
  description: string;
  thumbnailImg: string;
  posterImg: string;
  releaseYear: string;
  seen: boolean;
  onList: boolean;
  ratings?: any;
};

export const VALID_MOVIE_ATTRS = ["latest", "all"];
export type MovieAttr = (typeof VALID_MOVIE_ATTRS)[number];
