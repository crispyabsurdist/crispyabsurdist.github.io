import React, { useState } from "react";
import { Play, Pause } from "lucide-react";
import { useAudio } from "../hooks/useAudio";

export function AudioButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { isPlaying, togglePlay } = useAudio("/leeroy.mp3");

  return (
    <button
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden
        w-24 h-24 rounded-full
        bg-gradient-to-br from-purple-500 to-pink-500
        shadow-lg transform transition-all duration-300
        flex items-center justify-center
        ${isHovered ? "scale-110 shadow-xl" : ""}
        hover:from-purple-600 hover:to-pink-600
      `}
    >
      <div className="absolute inset-0 bg-black opacity-10 rounded-full" />
      <div
        className={`
        transform transition-transform duration-300
        ${isHovered ? "scale-110" : "scale-100"}
      `}
      >
        {isPlaying ? (
          <Pause className="w-10 h-10 text-white" />
        ) : (
          <Play className="w-10 h-10 text-white" />
        )}
      </div>
      <div
        className={`
        absolute inset-0 border-4 border-white rounded-full
        opacity-20 transition-transform duration-500
        ${isPlaying ? "scale-110" : "scale-100"}
      `}
      />
    </button>
  );
}
