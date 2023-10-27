import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
