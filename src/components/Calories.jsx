import React, { useState } from 'react';

const CalorieTracker = () => {
  const [calories, setCalories] = useState('');

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  return (
    <div>
      <input
        id="calorie-input"
        type="number"
        value={calories}
        onChange={handleChange}
        placeholder="Enter the calories for the candy bar you want to eat"
      />
      <p>You have had {calories} calories today</p>
    </div>
  );
};

export default FavCandyInput;