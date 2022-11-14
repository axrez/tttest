import { TmdbMovie } from "@lib/types";
import styles from "./movie.module.css";

const getMovie = async (movieId: string): Promise<TmdbMovie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());

  return res;
};

const getCredits = async (movieId: string): Promise<any> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());

  return res;
};

const Movie = async ({ params }: { params: { movieId: string } }) => {
  const [movie, credits] = await Promise.all([
    getMovie(params.movieId),
    getCredits(params.movieId),
  ]);

  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <h1 className={styles.movieTitle}>{movie.title}</h1>
        <p className={styles.rating}>
          Rating: {movie.vote_average}/10 ({movie.vote_count} votes)
        </p>
        <p>{movie.overview}</p>
      </div>
      <img
        alt={`Movie poster for ${movie.title}`}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
        className={styles.poster}
      />

      <section className={styles.castSection}>
        <h2 className={styles.castHeader}>Cast</h2>
        <ul className={styles.castList}>
          {credits.cast.map((c) => (
            <li key={c.id} className={styles.castContainer}>
              <img
                src={
                  c.profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${c.profile_path}`
                    : "/avatar-placeholder.jpg"
                }
                alt=""
                className={styles.castImage}
              />
              <p>{c.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Movie;
