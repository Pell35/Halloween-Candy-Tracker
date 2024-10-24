import React, { useState } from 'react';

const MovieTracker = () => {
  const [movies, setMovies] = useState('');

  const handleChange = (e) => {
    setMovies(e.target.value);
  };

  return (
    <div>
      <input
        id="movie-input"
        type="text"
        value={movies}
        onChange={handleChange}
        placeholder="Enter the movie you want to watch"
      />
      <p>You said you want to watch {movies}</p>
    </div>
  );
};

export default MovieTracker;