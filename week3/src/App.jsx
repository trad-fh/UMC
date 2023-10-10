import { movies as api } from "./services/api";
import Movie from "./components/Movie";

import "./styles/App.css";

const { results: movies } = api;

function App() {
  
  return (
    <div className="App">
      <div className="movies_wrapper">
        {movies.map(movie => <Movie  key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
}

export default App;
