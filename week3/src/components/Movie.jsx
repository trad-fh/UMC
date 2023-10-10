import "../styles/components/Movie.css"


const Movie = ({ movie }) => {
    const { title, vote_average, poster_path, overview } = movie;

    //overview 축약
    const shortenedOverview = overview.length > 150 
    ? overview.slice(0, 150).trim() + "..." 
    : overview;

    return (
    <div className="movie__container">
        <div className="movie__wrapper">
            <h4>{title}</h4>
            <p>{shortenedOverview}</p>
        </div>
        <div className="movie__image"><img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="poster" />
        </div>
        <div className="movie__description">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
    </div>);
}

export default Movie;