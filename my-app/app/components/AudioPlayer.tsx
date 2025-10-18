import React from "react";

type AudioPlayerProps = {
  src: string;
  label?: string;
};


const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, label }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    const audio = audioRef.current;
    if (audio) {
      // Only play if not already playing
      if (audio.paused) {
        audio.currentTime = 0;
        audio.play().catch(() => {}); // Ignore play() interruption errors
      }
    }
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;
    if (audio) {
      // Only pause if not already paused
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  };

  return (
    <div
      className="my-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-100 via-blue-50 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-4 flex flex-col items-center border border-blue-200 dark:border-gray-700 transition hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label && (
        <div className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300 tracking-wide flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" /></svg>
          {label}
        </div>
      )}
      <audio
        ref={audioRef}
        controls
        className="w-full rounded-lg border border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-900"
        style={{ pointerEvents: 'auto' }}
        onContextMenu={e => e.preventDefault()}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <style>{`
        audio::-webkit-media-controls-enclosure {
          overflow: hidden;
          border-radius: 0.75rem;
        }
        audio::-webkit-media-controls-panel {
          width: 100%;
          background: linear-gradient(90deg, #ede9fe 0%, #f0f9ff 50%, #ffe4e6 100%);
        }
        audio::-webkit-media-controls-download-button {
          display: none !important;
        }
        audio::-webkit-media-controls-playback-rate-button {
          display: none !important;
        }
        audio::-webkit-media-controls-play-button {
          color: #a21caf !important;
        }
        audio::-webkit-media-controls-current-time-display,
        audio::-webkit-media-controls-time-remaining-display {
          color: #2563eb !important;
        }
        audio::-webkit-media-controls-timeline {
          background: #c7d2fe !important;
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
