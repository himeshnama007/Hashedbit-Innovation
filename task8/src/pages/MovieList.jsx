import movies from "../data/movies";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Movies</h1>

      <div className="grid">
        {movies.map(movie => (
          <div
            key={movie.id}
            className="card"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;