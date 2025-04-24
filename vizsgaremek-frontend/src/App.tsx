import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { RequireAuth } from "./auth/RequireAuth";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="grow">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route element={<RequireAuth />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/search" element={<Search />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
