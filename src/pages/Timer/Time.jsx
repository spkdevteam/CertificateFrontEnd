import { useEffect, useState } from "react";

const Time = ({ value, onChange }) => {
  const parseTime = (timeString) => {
    if (!timeString || typeof timeString !== "string") return Math.floor(Date.now() / 1000);

    const now = new Date();
    const timeParts = timeString.split(".").map(Number);
    if (timeParts.length !== 3) return Math.floor(Date.now() / 1000);

    let [hours, minutes, seconds] = timeParts;
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds).getTime() / 1000;
  };

  const valuestamp = parseTime(value);
  const currentTime = Math.floor(Date.now() / 1000);
  const [time, setTime] = useState(currentTime - valuestamp);

  // ✅ Start timer without calling onChange inside it
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✅ Call onChange only when time updates
  useEffect(() => {
    if (onChange) {
      onChange(time);
    }
  }, [time, onChange]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center  justify-center h-full w-full bg-green-400 text-white">
      <div className="text-4xl font-mono mb-4 bg-red-200">{formatTime(time)}</div>
    </div>
  );
};

export default Time;





