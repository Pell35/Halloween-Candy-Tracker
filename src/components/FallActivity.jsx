import React, { useState } from 'react';

const ActivityTracker = () => {
  const [activities, setActivities] = useState('');

  const handleChange = (e) => {
    setActivities(e.target.value);
  };

  return (
    <div>
      <input
        id="activity-input"
        type="text"
        value={activities}
        onChange={handleChange}
        placeholder="Enter the activities you want to do this fall"
      />
      <p>These are the activities you want to do this Fall: {activities}.</p>
    </div>
  );
};

export default ActivityTracker  ;