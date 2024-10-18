import React, { useState } from 'react';

const FavCandyInput = () => {
  const [favoriteCandy, setFavoriteCandy] = useState('');

  const handleChange = (e) => {
    setFavoriteCandy(e.target.value);
  };

  return (
    <div>
      <input
        id="candy-input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter your favorite Halloween candy?"
      />
      <p>Your favorite Halloween candy is {favoriteCandy}</p>
    </div>
  );
};

export default InputComponent;