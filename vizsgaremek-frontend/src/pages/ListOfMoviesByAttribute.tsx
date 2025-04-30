import { useCallback, useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLocation, useNavigate } from "react-router-dom";
import { VALID_MOVIE_ATTRS, MovieAttr, Movie } from "../types/Movie";
import api from "../utils/api";
import { getMoviesFetchAmount } from "../utils/getMoviesFetchAmount";
import MovieCard from "../components/MovieCard";

export default function ListOfMoviesByAttribute() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [endpointToCall, setEndpointToCall] = useState<string>();
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [title, setTitle] = useState<string>("");
  const movieFetchAmount = getMoviesFetchAmount();

  useEffect(() => {
    const pathSegment = location.pathname.split("/movies/")[1];

    if (!VALID_MOVIE_ATTRS.includes(pathSegment as MovieAttr)) {
      navigate("/404", { replace: true });
      return;
    }

    setTitle(
      pathSegment
        ? pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1) + " movies"
        : ""
    );
    setEndpointToCall(`movies/${pathSegment}`);
  }, [location, navigate, setEndpointToCall]);

  const fetchMovies = useCallback(async () => {
    if (endpointToCall) {
      try {
        const res = await api.get(endpointToCall, {
          params: {
            limit: movieFetchAmount,
            offset,
          },
        });

        const newMovies = res.data;

        setMovies((prev) => [...prev, ...newMovies]);
        if (offset === 0) {
          setOffset((prev) => prev + movieFetchAmount);
        }

        if (newMovies.length < movieFetchAmount) {
          setHasMore(false);
        }
      } catch (err) {
        console.error("Error happened: ", err);
      } finally {
        setIsLoadingMore(false);
        setIsLoading(false);
      }
    }
  }, [endpointToCall, movieFetchAmount, offset]);

  useEffect(() => {
    if (!endpointToCall) {
      return;
    }

    if (movies.length === 0) {
      setIsLoading(true);
      fetchMovies();
    }
  }, [endpointToCall, fetchMovies, movies]);

  useEffect(() => {
    if (movies.length === 0 || isLoading || isLoadingMore || offset === 0) {
      return;
    }

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !isLoading &&
        hasMore
      ) {
        setIsLoadingMore(true);
        setOffset((prev) => prev + movieFetchAmount);
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    isLoading,
    hasMore,
    movies,
    offset,
    isLoadingMore,
    fetchMovies,
    movieFetchAmount,
  ]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="px-4 py-4 sm:px-6 lg:px-12 fadeIn max-w-[1440px] mx-auto">
      <h1 className="mt-10 text-center text-3xl mb-10">
        {title}
        {movies.length}
      </h1>
      {movies.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <p>We could not find any movies.</p>
      )}

      {isLoadingMore && <LoadingSpinner />}
    </div>
  );
}
