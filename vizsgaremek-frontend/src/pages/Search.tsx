import { useLocation } from "react-router-dom";
import { movies } from "./Dashboard";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const { state } = useLocation();
  const { term } = state;

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="text-center my-10">
        Show results for: <span className="font-bold">{term}</span>
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
