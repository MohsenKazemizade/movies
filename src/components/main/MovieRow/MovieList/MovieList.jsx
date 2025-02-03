/* eslint-disable react/prop-types */
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ data }) => {
  return (
    <div className="content-row_content-row__carousel__J2xRM undefined larger-cards">
      <div className="swiper swiper-initialized swiper-horizontal">
        <div
          className="swiper-wrapper"
          style={{
            transitionDuration: "200ms",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          {data.map((movie, index) => {
            return <MovieCard key={movie.id} movie={movie} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
