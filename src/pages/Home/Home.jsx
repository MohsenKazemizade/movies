import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/main/HomeHero/Hero";
import MovieRow from "../../components/main/MovieRow/MovieRow";
import CreateAccountSection from "../../components/main/CreateAccount/CreateAccountSection";
// import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          "https://moviesapi.codingfront.dev/api/v1/movies"
        );
        setMovies(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <main className="base-container_main__mvaf5" id="base-container">
      <div className="home_home__DKDa2">
        <Hero />
        <div className="home_home__content-rows__NVLjE" id="rows-container">
          <MovieRow data={movies} title="Top 250 Movie" />
          <CreateAccountSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
