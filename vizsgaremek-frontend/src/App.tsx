import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { RequireAuth } from "./auth/RequireAuth";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Watchlist from "./pages/Watchlist";
import ListOfMoviesByAttribute from "./pages/ListOfMoviesByAttribute";
import Movies from "./pages/Movies";
import Seen from "./pages/Seen";
import { MovieStatusProvider } from "./context/MovieStatusContext";

function App() {
  return (
    <>
      <MovieStatusProvider>
        <div className="flex flex-col min-h-screen">
          <div className="grow">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route element={<RequireAuth />}>
                <Route
                  path="/movies/:attr"
                  element={<ListOfMoviesByAttribute />}
                />
                <Route path="/movies" element={<Movies />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/seen" element={<Seen />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/search" element={<Search />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </MovieStatusProvider>
    </>
  );
}

export default App;
