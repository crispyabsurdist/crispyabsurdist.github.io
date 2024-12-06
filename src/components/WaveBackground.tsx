import React from 'react';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-[600px] h-[600px] rounded-full
              border-2 border-purple-500/30
              animate-pulse
            `}
            style={{
              animation: `pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
              animationDelay: `${i * 1}s`,
              opacity: 1 - i * 0.2,
              transform: `scale(${1 + i * 0.2})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}