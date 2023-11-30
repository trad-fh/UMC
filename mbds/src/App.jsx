import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";

import Celebrity from "./page/Celebrity";
import Home from "./page/Home";
import Movies from "./page/Movies";
import NotFound from "./page/NotFound";
import TV from "./page/TV";
import VideoDetail from "./page/VideoDetail";
import Login from "./page/Login";

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
          <Route path="/movies/:title" element={<VideoDetail />} />
          <Route path="/tv/:title" element={<VideoDetail />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/login" element={<Login />} />
          <Route path={"*"} element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  