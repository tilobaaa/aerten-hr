import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    
    <div
      onClick={() => setIsOn(!isOn)}
      className={`w-9 h-5 p-[0.12re,] flex items-center rounded-xl  cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-[#6a1039]" : "bg-[#f2f4f7] border border-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-[1.1rem]" : "translate-x-0"
        }`}
      />
    </div>
  );
}
