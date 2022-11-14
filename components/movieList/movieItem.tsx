import { TmdbMovie } from "@lib/types";
import Link from "next/link";
import styles from "./movieItem.module.css";

interface Props {
  movie: TmdbMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <li key={movie.id} className={styles.movieItemContainer}>
      <img
        alt={`Movie poster for ${movie.title}`}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        className={styles.poster}
      />
      <div className={styles.infoContainer}>
        <Link href={`/movie/${movie.id}`}>
          <h2 className={styles.movieTitle}>{movie.title}</h2>
        </Link>
        <p>Rating: {movie.vote_average}/10</p>
        <p className={styles.movieDesc}>{movie.overview}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link className={styles.detailsButton} href={`/movie/${movie.id}`}>
          See details
        </Link>
      </div>
    </li>
  );
};

export default MovieItem;
