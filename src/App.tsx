import { useState, useEffect } from 'react';
import Cover from './components/Cover';
import Greeting from './components/Greeting';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import './index.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Extract guest name from URL parameter ?tamu=Name
    const params = new URLSearchParams(window.location.search);
    const tamu = params.get('tamu');
    if (tamu) {
      setGuestName(tamu);
    }
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    // Allow body to scroll again
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    // Prevent scrolling when cover is active
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpened]);

  return (
    <div className="app-container">
      {!isOpened && (
        <Cover guestName={guestName} onOpen={handleOpen} />
      )}
      
      {isOpened && (
        <main className="animate-fade-in">
          <MusicPlayer />
          <Greeting />
          <Schedule />
          <Gallery />
          
          <footer className="footer section-padding text-center">
            <p className="closing-text">
              Melarapan antuk mapah bhakti tresna lan asih, titiang ngelungsur marga ledang rauh nyaksiang saha mapica pengrestiti gumantos yadnya memargi antar lan labdakarya.
            </p>
            <h3 className="gold-text" style={{margin: '2rem 0 0.5rem'}}>Om Shanti Shanti Shanti Om</h3>
            <p className="date" style={{marginBottom: '2rem'}}>Bona, Gianyar – 10 Maret 2026</p>
            <p className="family-name">Keluarga Reken<br/>Keluarga Besar Pasek Padang Subadra – Bona</p>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
