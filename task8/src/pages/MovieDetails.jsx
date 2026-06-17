import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  return (
    <div>
      <h1>{movie.title}</h1>

      <img src={movie.image} alt={movie.title} />

      <p>{movie.description}</p>

      <button
        onClick={() => navigate(`/booking/${movie.id}`)}
      >
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;