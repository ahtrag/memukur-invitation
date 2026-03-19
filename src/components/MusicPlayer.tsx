import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to play music when component mounts (although browsers usually block auto-play until user interaction)
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={styles.container}>
      <button 
        onClick={togglePlay} 
        style={{...styles.button, ...(isPlaying ? styles.rotating : {})}}
        title="Play/Pause Music"
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
      {/* Invisible audio element. Using a placeholder or left empty depending on assets */}
      <audio 
        ref={audioRef}
        loop
        src="/balinese_music.mp3" 
      />
      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed' as const,
    bottom: '20px',
    right: '20px',
    zIndex: 999,
  },
  button: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-gold)',
    color: 'var(--color-bg)',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    border: '2px solid rgba(255,255,255,0.2)',
  },
  rotating: {
    animation: 'spin 4s linear infinite',
  }
};

export default MusicPlayer;
