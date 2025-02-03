import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/main/HomeHero/Hero";
import MovieRow from "../../components/main/MovieRow/MovieRow";
import CreateAccountSection from "../../components/main/CreateAccount/CreateAccountSection";
// import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMoviesAndGenres = async () => {
      let allMovies = [];
      let allGenres = [];
      let page = 1;
      let totalPages = 1;

      try {
        while (page <= totalPages) {
          const response = await axios.get(
            `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`
          );
          const data = response.data;

          allMovies = [...allMovies, ...data.data];

          data.data.forEach((movie) => {
            allGenres = [...allGenres, ...movie.genres];
          });

          totalPages = data.metadata.page_count;

          page++;
        }

        setMovies(allMovies);
        setGenres([...new Set(allGenres)]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesAndGenres();
  }, []);
  return (
    <main className="base-container_main__mvaf5" id="base-container">
      <div className="home_home__DKDa2">
        <Hero />
        <div className="home_home__content-rows__NVLjE" id="rows-container">
          <MovieRow data={movies} title="Top 250 Movie" />
          <CreateAccountSection />
          {genres.map((genre) => {
            const genreMovies = movies.filter((movie) =>
              movie.genres.includes(genre)
            );
            return genreMovies.length > 0 ? (
              <MovieRow key={genre} title={genre} data={genreMovies} />
            ) : null;
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
