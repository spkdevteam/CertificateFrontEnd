import React, { useState } from 'react';

function SlotTimingAdjuster({ startTime, endTime }) {
  const [currentStartTime, setCurrentStartTime] = useState(startTime);
  const [currentEndTime, setCurrentEndTime] = useState(endTime);

  const handleStartTimeChange = (e) => {
    setCurrentStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setCurrentEndTime(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Start Time: </label>
        <input
          type="time"
          value={currentStartTime || ""}
          onChange={handleStartTimeChange}
        />
      </div>
      <div>
        <label>End Time: </label>
        <input
          type="time"
          value={currentEndTime || ""}
          onChange={handleEndTimeChange}
        />
      </div>
      <div>
        <p>Adjusted Start Time: {currentStartTime}</p>
        <p>Adjusted End Time: {currentEndTime}</p>
      </div>
    </div>
  );
}

export default SlotTimingAdjuster;
