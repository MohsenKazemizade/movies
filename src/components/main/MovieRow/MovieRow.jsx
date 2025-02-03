/* eslint-disable react/prop-types */
// import { useState } from "react";
import MovieRowTitle from "./MovieRowTitle/MovieRowTitle";
// import "./MovieRow.css";
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
        >
          <button
            type="button"
            className="content-row_right-arrow__LpbZv "
            tabIndex="0"
            data-test="right-arrow"
          >
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.668739 15.6662C0.453927 15.4514 0.333252 15.16 0.333252 14.8561C0.333252 14.5523 0.453927 14.2609 0.668739 14.046L6.52743 8.18388C6.5541 8.15727 6.57527 8.12566 6.58971 8.09086C6.60415 8.05606 6.61158 8.01875 6.61158 7.98107C6.61158 7.94339 6.60415 7.90608 6.58971 7.87128C6.57527 7.83648 6.5541 7.80486 6.52743 7.77825L0.668739 1.91613C0.471007 1.69837 0.364587 1.41292 0.371513 1.11886C0.378439 0.824807 0.49818 0.544677 0.705944 0.33647C0.913709 0.128264 1.19358 0.00792833 1.48762 0.00037797C1.78166 -0.00717239 2.06734 0.098641 2.28552 0.29591L8.75494 6.76533C8.91466 6.92495 9.04136 7.11447 9.12781 7.32307C9.21425 7.53167 9.25875 7.75526 9.25875 7.98107C9.25875 8.20687 9.21425 8.43046 9.12781 8.63906C9.04136 8.84767 8.91466 9.03719 8.75494 9.19681L2.28552 15.6662C2.07079 15.88 1.78013 16 1.47713 16C1.17414 16 0.883474 15.88 0.668739 15.6662Z"
                fill="inherit"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="content-row_left-arrow__AXpwf content-row_disabled__NKbM0"
            tabIndex="-1"
            data-test="left-arrow"
          >
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.668739 15.6662C0.453927 15.4514 0.333252 15.16 0.333252 14.8561C0.333252 14.5523 0.453927 14.2609 0.668739 14.046L6.52743 8.18388C6.5541 8.15727 6.57527 8.12566 6.58971 8.09086C6.60415 8.05606 6.61158 8.01875 6.61158 7.98107C6.61158 7.94339 6.60415 7.90608 6.58971 7.87128C6.57527 7.83648 6.5541 7.80486 6.52743 7.77825L0.668739 1.91613C0.471007 1.69837 0.364587 1.41292 0.371513 1.11886C0.378439 0.824807 0.49818 0.544677 0.705944 0.33647C0.913709 0.128264 1.19358 0.00792833 1.48762 0.00037797C1.78166 -0.00717239 2.06734 0.098641 2.28552 0.29591L8.75494 6.76533C8.91466 6.92495 9.04136 7.11447 9.12781 7.32307C9.21425 7.53167 9.25875 7.75526 9.25875 7.98107C9.25875 8.20687 9.21425 8.43046 9.12781 8.63906C9.04136 8.84767 8.91466 9.03719 8.75494 9.19681L2.28552 15.6662C2.07079 15.88 1.78013 16 1.47713 16C1.17414 16 0.883474 15.88 0.668739 15.6662Z"
                fill="inherit"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MovieRow;
