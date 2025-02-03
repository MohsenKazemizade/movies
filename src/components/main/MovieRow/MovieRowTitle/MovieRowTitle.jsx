/* eslint-disable react/prop-types */
// import "./MovieRowTitle.css";
const MovieRowTitle = ({ title }) => {
  return (
    <div className="container content-row_content-row__title__gZklP">
      <div className="content-row_content-ads-title__8lZ_M">
        <div className="sponsored-ads_sponsored-ad__zTH2p sponsored-ads_visible__6MyOe content-row_content-row__ads__eA5ci"></div>
        <h2 className="content-row_content-title__FuQP9">
          {title ? title : "Spotlight"}
        </h2>
      </div>
      <button
        type="button"
        className="content-row_content-row__see-all__q5MLX"
        tabIndex="0"
      >
        See All
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4977 4.78786L23.4977 10.7879C23.8191 11.1093 23.9996 11.5453 23.9996 11.9999C23.9996 12.4544 23.8191 12.8904 23.4977 13.2119L17.4977 19.2119C17.1744 19.5241 16.7414 19.6969 16.2919 19.693C15.8424 19.6891 15.4124 19.5088 15.0946 19.191C14.7768 18.8731 14.5965 18.4432 14.5926 17.9937C14.5887 17.5442 14.7614 17.1112 15.0737 16.7879L17.4154 14.4461C17.4755 14.3862 17.5165 14.3098 17.5331 14.2265C17.5497 14.1433 17.5412 14.057 17.5087 13.9786C17.4762 13.9002 17.4211 13.8332 17.3505 13.7861C17.2799 13.739 17.1969 13.714 17.112 13.7141H1.71429C1.25963 13.7141 0.823594 13.5335 0.502103 13.212C0.180612 12.8906 0 12.4545 0 11.9999C0 11.5452 0.180612 11.1092 0.502103 10.7877C0.823594 10.4662 1.25963 10.2856 1.71429 10.2856H17.112C17.1969 10.2857 17.2799 10.2607 17.3505 10.2136C17.4211 10.1665 17.4762 10.0995 17.5087 10.0211C17.5412 9.94271 17.5497 9.85642 17.5331 9.77318C17.5165 9.68995 17.4755 9.61352 17.4154 9.55358L15.0737 7.21186C14.7614 6.88854 14.5887 6.45551 14.5926 6.00603C14.5965 5.55655 14.7768 5.12659 15.0946 4.80874C15.4124 4.4909 15.8424 4.31061 16.2919 4.30671C16.7414 4.3028 17.1744 4.47559 17.4977 4.78786V4.78786Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};
export default MovieRowTitle;
