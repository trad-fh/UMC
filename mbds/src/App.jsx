import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";

import Celebrity from "./page/Celebrity";
import Home from "./page/Home";
import Movies from "./page/Movies";
import NotFound from "./page/NotFound";
import TV from "./page/TV";

import "./styles/App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/tv" element={<TV />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  