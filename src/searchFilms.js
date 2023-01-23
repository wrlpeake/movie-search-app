import React, {useState} from 'react';
import FilmCard from "./filmCard";
function SearchFilms() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchFilms = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=61ce77a8a1c2df5cc47d90f870792ec1&language=en-US&query=${query}?&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results)
        } catch (err) {
            console.error(err);
        }

    }
    return (
        <>
            <form className="form" onSubmit={searchFilms}>
                <input className="query" type="text" placeholder="Search for film..."
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <FilmCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
}

export default SearchFilms;