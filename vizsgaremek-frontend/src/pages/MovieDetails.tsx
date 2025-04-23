import { useParams } from "react-router-dom";
import { Movie } from "../types/Movie";
import { movies } from "./Dashboard";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { title, posterImg, releaseYear, description }: Movie = movies.find(
    (movie) => movie.id === id
  )!;

  return (
    <>
      <header
        className="relative h-[40vw] bg-cover bg-center"
        style={{ backgroundImage: `url(${posterImg})` }}
      >
        <div className="absolute left-[3rem] bottom-[1rem] ">
          <h1
            className="text-center text-3xl"
            style={{ textShadow: "0 1px 1px black" }}
          >
            {title}
          </h1>
          <h2>({releaseYear})</h2>
        </div>
      </header>
      <section className="px-4 sm:px-6 lg:px-12 py-5">
        <h2 className="underline text-xl mb-3">About the movie:</h2>
        <p>{description}</p>
      </section>
    </>
  );
}
