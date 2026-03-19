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
import img9 from '../assets/images/9.jpeg';
import img10 from '../assets/images/10.jpeg';
import img11 from '../assets/images/11.jpeg';
import img12 from '../assets/images/12.jpeg';
import img13 from '../assets/images/13.jpeg';
import img14 from '../assets/images/14.jpeg';
import img15 from '../assets/images/15.jpeg';
import img16 from '../assets/images/16.jpeg';
import img17 from '../assets/images/17.jpeg';
import img18 from '../assets/images/18.jpeg';
import img19 from '../assets/images/19.jpeg';
import img20 from '../assets/images/20.jpeg';
import img21 from '../assets/images/21.jpeg';
import img22 from '../assets/images/22.jpeg';
import img23 from '../assets/images/23.jpeg';
import img24 from '../assets/images/24.jpeg';
import img25 from '../assets/images/25.jpeg';

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
    { src: img9, width: 604, height: 402, alt: 'Memory 9' },
    { src: img10, width: 992, height: 992, alt: 'Memory 10' },
    { src: img11, width: 720, height: 1280, alt: 'Memory 11' },
    { src: img12, width: 919, height: 1148, alt: 'Memory 12' },
    { src: img13, width: 1600, height: 1600, alt: 'Memory 13' },
    { src: img14, width: 854, height: 1280, alt: 'Memory 14' },
    { src: img15, width: 1600, height: 1064, alt: 'Memory 15' },
    { src: img16, width: 1280, height: 852, alt: 'Memory 16' },
    { src: img17, width: 1600, height: 1066, alt: 'Memory 17' },
    { src: img18, width: 1600, height: 1066, alt: 'Memory 18' },
    { src: img19, width: 1066, height: 1600, alt: 'Memory 19' },
    { src: img20, width: 1084, height: 1280, alt: 'Memory 20' },
    { src: img21, width: 960, height: 720, alt: 'Memory 21' },
    { src: img22, width: 1600, height: 1066, alt: 'Memory 22' },
    { src: img23, width: 1600, height: 1066, alt: 'Memory 23' },
    { src: img24, width: 1600, height: 1066, alt: 'Memory 24' },
    { src: img25, width: 1280, height: 960, alt: 'Memory 25' },
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
