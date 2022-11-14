import { TmdbMovie } from "@lib/types";
import MovieItem from "./movieItem";
import styles from "./movieItem.module.css";

const MovieList: React.FC<{ movies: Array<TmdbMovie> }> = ({ movies }) => (
  <ul className={styles.movieList}>
    {movies.map((movie) => (
      <MovieItem movie={movie} key={movie.id} />
    ))}
  </ul>
);

export default MovieList;
