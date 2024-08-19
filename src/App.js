import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import NavScrollExample from "./components/navbar";
import MovieList from "./components/MovieList";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=92e5ab36ee04c0a126e3dc1005daf7e4&language=ar"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  // get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=92e5ab36ee04c0a126e3dc1005daf7e4&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // to seach in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=92e5ab36ee04c0a126e3dc1005daf7e4&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };

  return (
    <div className="font">
      <NavScrollExample search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount}/>} />
              
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
