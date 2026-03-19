import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';

const Gallery: React.FC = () => {
  const [index, setIndex] = useState(-1);

  // Using exact dimensions based on the source files to prevent squeezing
  const photos = [
    { src: img1, width: 960, height: 829, alt: 'Memory 1' },
    { src: img2, width: 854, height: 738, alt: 'Memory 2' },
    { src: img3, width: 960, height: 937, alt: 'Memory 3' },
    { src: img4, width: 1280, height: 1249, alt: 'Memory 4' },
    { src: img5, width: 960, height: 832, alt: 'Memory 5' },
    { src: img6, width: 960, height: 832, alt: 'Memory 6' },
    { src: img7, width: 853, height: 739, alt: 'Memory 7' },
    { src: img8, width: 768, height: 665, alt: 'Memory 8' },
  ];

  return (
    <section className="section-padding" style={styles.section}>
      <div className="text-center" style={{ marginBottom: '3rem' }}>
        <h2 style={styles.title}>Forever Love.</h2>
        <p style={styles.subtitle}>
          Potongan Potongan kecil dari perjalanan hidup beliau, yang akan selalu tersimpan dalam hati kami.
        </p>
        <div style={styles.divider}></div>
      </div>

      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={(containerWidth) => {
          if (containerWidth < 400) return 120;
          if (containerWidth < 768) return 180;
          return 250;
        }}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </section>
  );
};

const styles = {
  section: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: 'var(--color-bg)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--color-text-muted)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  divider: {
    width: '60px',
    height: '2px',
    backgroundColor: 'var(--color-gold)',
    margin: '1.5rem auto 0 auto',
  },
};

export default Gallery;
