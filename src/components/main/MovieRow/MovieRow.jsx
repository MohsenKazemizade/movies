/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
import MovieRowTitle from "./MovieRowTitle/MovieRowTitle";
import "./MovieRow.css";
import MovieList from "./MovieList/MovieList";
const MovieRow = ({ data, title }) => {
  //   const [title, setTitle] = useState("");
  return (
    <div className="row">
      <div
        aria-label="Spotlight"
        className="content-row_content-row__TxcaA content-row_content-row__scrolling__UH8_7  content-row_atBegining__jjcPt content-row_standard__l5zjC"
      >
        <MovieRowTitle title={title} />
        <MovieList data={data} />
        <div
          className="content-row_content-row__arrow__74W_d"
          style={{ display: "block" }}
        ></div>
      </div>
    </div>
  );
};
export default MovieRow;
