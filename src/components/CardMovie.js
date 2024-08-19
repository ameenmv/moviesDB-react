import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="p-2">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
            className="card-image"
            alt="fdv"
          />
          <div className="card-overlay">
            <div className="overlay-text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title} </p>
              <p>تاريخ الاصدار : {mov.release_date}</p>
              <p>عدد المقيمين : {mov.vote_count}</p>
              <p>التقييم : {mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
