
import { movies as api } from "../services/api";
import Movie from "../components/Movie";

import styled from "../styles/page/Movies.module.css"

const { results: movies } = api;

function Movies () {
    return (
          <div className={`${styled.movies_wrapper}`}>
            {movies.map(movie => <Movie  key={movie.id} movie={movie}/>)}
          </div>
      );
}

export default Movies;