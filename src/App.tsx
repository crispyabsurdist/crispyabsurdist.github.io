import React from 'react';
import { AudioButton } from './components/AudioButton';
import { WaveBackground } from './components/WaveBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
      <WaveBackground />
      <div className="relative z-10">
        <AudioButton />
      </div>
    </div>
  );
}

export default App;