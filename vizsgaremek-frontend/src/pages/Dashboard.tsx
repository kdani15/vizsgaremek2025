import MovieCard from "../components/MovieCard";
import { Movie } from "../types/Movie";

export const movies: Movie[] = [
  {
    id: "01",
    title: "Csúszós sziklák",
    description:
      "Veszedelmes, csúszós sziklák okozzák ezrek halálát ezen a könyörtelen, Isten háta mögötti helyen.",
    thumbnailImg: "https://picsum.photos/id/14/200/100",
    posterImg: "https://picsum.photos/id/14/1200/500",
    releaseYear: "2023",
    seen: false,
    onList: false,
  },
  {
    id: "02",
    title: "Csúszós sziklák 2",
    description:
      "Veszedelmes, csúszós sziklák okozzák ezrek halálát ezen a könyörtelen, Isten háta mögötti helyen.",
    thumbnailImg: "https://picsum.photos/id/15/200/100",
    posterImg: "https://picsum.photos/id/15/1200/500",
    releaseYear: "2023",
    seen: false,
    onList: false,
  },
  {
    id: "03",
    title: "Kevésbé csúszós sziklák",
    description:
      "Veszedelmes, csúszós sziklák okozzák ezrek halálát ezen a könyörtelen, Isten háta mögötti helyen.",
    thumbnailImg: "https://picsum.photos/id/16/200/100",
    posterImg: "https://picsum.photos/id/16/1200/500",
    releaseYear: "2023",
    seen: false,
    onList: false,
  },
  {
    id: "04",
    title: "A láthatatlan úthenger",
    description:
      "Mindent, és mindenkit kilapít, aki elé kerül. Amikor meghallod dübörgő hangját, már valószínűleg túl késő.",
    thumbnailImg: "https://picsum.photos/id/17/200/100",
    posterImg: "https://picsum.photos/id/17/1200/500",
    releaseYear: "2023",
    seen: false,
    onList: false,
  },
  {
    id: "05",
    title: "Susnyák titka",
    description:
      "Egy raszta jár a környéken, aki gondolkodás nélkül elszív minden susnyát ami az útjába kerül. A növények kifejlesztenek magukban egy anyagot, amely elszívás után a véráramba kerülve átveheti az agy feletti uralmat. Megkezdődik a raszták és a növények biológiai hadviselése.",
    thumbnailImg: "https://picsum.photos/id/18/200/100",
    posterImg: "https://picsum.photos/id/18/1200/500",
    releaseYear: "2010",
    seen: false,
    onList: false,
  },
];

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="flex justify-between mt-10 mb-1">
        <h2>New movies:</h2>
        <a href="/dashboard">All new</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>

      <div className="flex justify-between mt-10 mb-1">
        <h2>Highest rated movies:</h2>
        <a href="/dashboard">All highest rated</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
