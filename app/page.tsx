import { TmdbMovie, TmdbPagedResponse } from "../lib/types";
import styles from "./rootPage.module.css";
import MovieList from "@components/movieList/movieList";

const fetchData = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());

  return res;
};

export default async function Home() {
  const data: TmdbPagedResponse<TmdbMovie> = await fetchData();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Your go-to place to see popular movies</h1>
        <MovieList movies={data.results} />
      </main>
    </div>
  );
}
