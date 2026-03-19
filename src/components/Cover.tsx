import React from 'react';

interface CoverProps {
  guestName: string;
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ guestName, onOpen }) => {
  return (
    <div className="cover-container" style={styles.container}>
      <div className="cover-content text-center" style={styles.content}>
        <h3 className="gold-text animate-slide-up delay-1" style={styles.subtitle}>PENGELING - ELING</h3>
        <h1 className="title animate-slide-up delay-2" style={styles.title}>Upacara Memukur</h1>
        <h2 className="name animate-slide-up delay-3" style={styles.name}>Alm. I Putu Yuliartha</h2>
        
        <div className="guest-section animate-slide-up delay-3" style={styles.guestSection}>
          <p style={styles.guestLabel}>Kpd. Bapak/Ibu/Saudara/i</p>
          <p style={styles.guestName}>{guestName}</p>
        </div>

        <button 
          className="btn-primary animate-slide-up delay-3" 
          onClick={onOpen}
          style={styles.button}
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0.75), rgba(18, 18, 18, 0.95)), url(/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'var(--color-bg)',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    padding: '2rem',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    letterSpacing: '3px',
    marginBottom: '-1rem',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.2',
  },
  name: {
    fontSize: '2rem',
    color: 'var(--color-text)',
    fontStyle: 'italic',
  },
  guestSection: {
    marginTop: '2rem',
    padding: '1.5rem 3rem',
    borderTop: '1px solid rgba(212, 175, 55, 0.3)',
    borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
  },
  guestLabel: {
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    marginBottom: '0.5rem',
  },
  guestName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--color-gold)',
  },
  button: {
    marginTop: '2rem',
  }
};

export default Cover;
