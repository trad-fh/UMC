import { tvs as api } from "../services/tvDummy";
import VideoInfo from "../components/VideoInfo";

import styled from "../styles/page/Movies.module.css"

const { results: tvs } = api;

function TV () {
    return (
          <div className={`${styled.movies_wrapper}`}>
            {tvs.map(tv => <VideoInfo type="tv" key={tv.id} content={tv}/>)}
          </div>
      );
}

export default TV;