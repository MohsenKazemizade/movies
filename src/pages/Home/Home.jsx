import "./Home.css";

const Home = () => {
  return (
    <main className="base-container_main__mvaf5" id="base-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Movie Website</h1>
          <p>Discover the latest movies and TV shows.</p>
        </div>
      </section>
      <section className="movie-grid">{/* Movie cards will go here */}</section>
    </main>
  );
};

export default Home;
