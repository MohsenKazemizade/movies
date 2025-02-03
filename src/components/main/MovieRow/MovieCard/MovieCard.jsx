/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MovieCard.css";
const MovieCard = ({ movie, index }) => {
  return (
    <div
      className="swiper-slide swiper-slide-active"
      style={{ width: "244px", marginRight: "8px" }}
    >
      <Link
        className="content-card_content-card__159AZ undefined content-card_standard__5K174  undefined false"
        id="card-afa2abe7-2a47-431b-9b6d-11c8a0e67ca2-2142725"
      >
        <div className="content-card_content-card__beacon__mzTbm"></div>
        <div className="content-card_content-card__poster-container__vXxC3">
          <div className="content-card_card_frame__dhtKP"></div>
          <div className="button_button_space__CaJR3 button_rounded__Aad7d button_solid__hfP17 content-card_button__ZFDf8   ">
            <button className="button_button__SRc2Y button_rounded__Aad7d button_solid__hfP17 content-card_button__ZFDf8   ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 27.963 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 26.484 9.609 L 7.824 0.28 C 7.422 0.078 6.974 -0.017 6.524 0.003 C 6.074 0.023 5.637 0.157 5.254 0.394 C 4.871 0.631 4.554 0.962 4.335 1.355 C 4.116 1.749 4.001 2.192 4.002 2.642 L 4.002 21.358 C 4.001 21.808 4.116 22.251 4.335 22.645 C 4.554 23.038 4.871 23.369 5.254 23.606 C 5.637 23.843 6.074 23.977 6.524 23.997 C 6.974 24.017 7.422 23.922 7.824 23.72 L 26.484 14.4 C 26.928 14.178 27.302 13.837 27.563 13.414 C 27.825 12.992 27.963 12.505 27.963 12.009 C 27.963 11.512 27.825 11.025 27.563 10.603 C 27.302 10.18 26.928 9.839 26.484 9.617 L 26.484 9.609 Z"></path>
              </svg>
            </button>
          </div>
          <picture alt={movie.title}>
            <source
              type="image/webp"
              srcSet="images/fallback_standard-v1.webp"
            />
            <img
              aria-hidden="true"
              alt={movie.title}
              src="images/fallback_standard-v1.webp"
              loading="lazy"
            />
          </picture>
          <img
            aria-hidden="true"
            src={movie.poster}
            alt={movie.title}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              opacity: "1",
            }}
          ></img>
          <div className="content-card_content-card__bottom__NnOBX">
            <div className="content-card_episode-tag__iIizO">
              <span>{`RANK: ${index + 1}`}</span>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="content-card_content-card__title__VRhE2"
        >
          {movie.title}
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
