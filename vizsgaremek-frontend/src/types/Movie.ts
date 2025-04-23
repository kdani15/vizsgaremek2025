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
