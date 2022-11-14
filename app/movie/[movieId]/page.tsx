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
      <h1>{movie.title}</h1>
      <p>
        Rating: {movie.vote_average}/10 ({movie.vote_count} votes)
      </p>
      <p>{movie.overview}</p>
      <img
        alt={`Movie poster for ${movie.title}`}
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
      />

      <div>
        {credits.cast.map((c) => (
          <p key={c.id}>{c.name}</p>
        ))}
      </div>
    </main>
  );
};

export default Movie;
