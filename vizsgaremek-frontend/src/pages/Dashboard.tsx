import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";

export default function Dashboard() {
  const movies: Movie[] = [
    {
      title: "Csúszós sziklák",
      thumb: "https://picsum.photos/id/14/200/100",
      slug: "/csuszossziklak",
    },
    {
      title: "Csúszós sziklák 2",
      thumb: "https://picsum.photos/id/15/200/100",
      slug: "/csuszossziklak",
    },
    {
      title: "kevésbé csúszós sziklák",
      thumb: "https://picsum.photos/id/16/200/100",
      slug: "/csuszossziklak",
    },
    {
      title: "A láthatatlan úthenger",
      thumb: "https://picsum.photos/id/17/200/100",
      slug: "/csuszossziklak",
    },
    {
      title: "Susnyák titka",
      thumb: "https://picsum.photos/id/18/200/100",
      slug: "/csuszossziklak",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between mt-10 mb-1">
        <h2>New movies:</h2>
        <a href="/dashboard">All new</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.slug} {...movie} />
        ))}
      </div>

      <div className="flex justify-between mt-10 mb-1">
        <h2>Highest rated movies:</h2>
        <a href="/dashboard">All highest rated</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.slug} {...movie} />
        ))}
      </div>
    </div>
  );
}
