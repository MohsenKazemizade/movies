import Hero from "../../components/main/HomeHero/Hero";
import MovieRow from "../../components/main/MovieRow/MovieRow";
import "./Home.css";

const Home = () => {
  return (
    <main className="base-container_main__mvaf5" id="base-container">
      <div className="home_home__DKDa2">
        <Hero />
        <div className="home_home__content-rows__NVLjE" id="rows-container">
          <MovieRow />
        </div>
      </div>
    </main>
  );
};

export default Home;
