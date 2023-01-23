import React from "react";
function SearchFilm() {
    return (
            <form className="form">
                <input className="query" type="text" placeholder="Search for film..."/>
                <button className="button" type="submit">Search</button>
            </form>
    );
}

export default SearchFilm;