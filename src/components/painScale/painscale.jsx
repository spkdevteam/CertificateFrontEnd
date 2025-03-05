import React, { useState, useRef, useEffect } from "react";

const PainScale = ({ inputValue = 15, startRange = 10, endRange = 20, name = '', onChange = (e) => console.log('New Value:', e) }) => {
  const [value, setValue] = useState(inputValue < startRange ? startRange : inputValue);
  const rangeRef = useRef(null);
  const draggingRef = useRef(false);

  // Effect to update value when inputValue changes
  useEffect(() => {
    setValue(inputValue < startRange ? startRange : inputValue);
  }, [inputValue, startRange, endRange]);

  const getState = (val) => {
    if (val < 12) return "low";
    if (val < 15) return "med-low";
    if (val < 18) return "med-high";
    return "high";
  };

  const stateColors = {
    "low": "border-green-500 bg-green-300",
    "med-low": "border-yellow-500 bg-yellow-300",
    "med-high": "border-orange-500 bg-orange-300",
    "high": "border-red-500 bg-red-300",
  };

  const handleMouseDown = (e) => {
    draggingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (draggingRef.current && rangeRef.current) {
      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue = Math.round(percentage * (endRange - startRange) + startRange);
      setValue(newValue);
    }
  };

  const handleMouseUp = (e) => {
    if (draggingRef.current && rangeRef.current) {
      const rect = rangeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const finalValue = Math.round(percentage * (endRange - startRange) + startRange);

      console.log('Current End Value:', finalValue); // Log the current end value
      setValue(finalValue); // Update the state with the final value
      onChange({ target: { name, value: finalValue } }); // Trigger callback
    }
    draggingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md select-none px-4 sm:px-0">
      <div className="relative w-full max-w-full h-12 flex items-center" ref={rangeRef}>
        <input
          type="range"
          min={startRange}
          max={endRange}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none bg-transparent"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: -1,
            cursor: 'pointer',
          }}
        />
        <div
          className={`absolute w-full h-2 rounded-lg bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500`}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
            height: '15px',
            zIndex: 0,
          }}
        />
        <div
          className={`absolute w-10 h-10 border-4 rounded-full shadow-lg cursor-pointer transition-transform active:scale-110 flex items-center justify-center text-black font-bold ${stateColors[getState(value)]}`}
          style={{ left: `calc(${((value - startRange) / (endRange - startRange)) * 100}% - 20px)`, top: "50%", transform: "translateY(-50%)", transition: "left 0.1s ease-out" }}
          onMouseDown={handleMouseDown}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default PainScale;