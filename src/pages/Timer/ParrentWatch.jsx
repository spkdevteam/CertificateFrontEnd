import React, { useState } from "react";
import Time from "./Time";

const ParrentWatch = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);

  return (
    <div className="w-full h-full flex justify-center items-center">
        
      <Time  value={"12.00.00"}  onChange={setStopwatchTime} />
    </div>
  );
};

export default ParrentWatch;
