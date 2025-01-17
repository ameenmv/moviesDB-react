import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const para = useParams();
  console.log(para);

  const [movie, setMovie] = useState([]);

  // get all movies by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${para.id}?api_key=92e5ab36ee04c0a126e3dc1005daf7e4&language=ar`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis d-flex align-items-center ">
            <img className="img-movie w-30"  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="ascad" />

            <div className="justify-content-center-text-center mx-auto">
              <p className="card-text-details border-bottom"></p>
              اسم الفيلم: {movie.title}
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
                <p className="card-text-details border-bottom"></p>
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">القصة</p>
            </div>

            <div className="text-end px-2">
              <p className="card-text-story">قصة الفيلم : {movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" className="mt-2 d-flex justify-content-center ">
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
