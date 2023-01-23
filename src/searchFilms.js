import React, {useState} from 'react';
function SearchFilms() {

    const [query, setQuery] = useState("");

    const searchFilms = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=61ce77a8a1c2df5cc47d90f870792ec1&language=en-US&query=${query}?`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }

    }
    return (
            <form className="form" onSubmit={searchFilms}>
                <input className="query" type="text" placeholder="Search for film..."
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
    );
}

export default SearchFilms;