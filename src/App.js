import './App.css';
import SearchFilms from './searchFilms';
import React from 'react';
function App() {
  return (
        <div className="container">
            <h1 className="title">React Movie Search App</h1>
            <SearchFilms />
        </div>
  );
}

export default App;
