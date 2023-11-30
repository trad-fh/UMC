
import { movies as api } from "../services/movieDummy";
import VideoInfo from "../components/VideoInfo";

import styled from "../styles/page/Movies.module.css"

const { results: movies } = api;

function Movies () {
    return (
          <div className={`${styled.movies_wrapper}`}>
            {movies.map(movie => <VideoInfo type="movies" key={movie.id} content={movie}/>)}
          </div>
      );
}

export default Movies;