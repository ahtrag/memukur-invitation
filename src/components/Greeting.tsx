import React from 'react';

const Greeting: React.FC = () => {
  return (
    <section className="section-padding text-center" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.omSwastiastu}>Om Swastiastu,</h2>
        <p style={styles.text}>
          Witnyaning asung kerta wara nugraha Ida Shang Hyang Widhi Wasa, titiang keluarga besar Pasek Padang Subadra Bona Gianyar, pacang ngemargiang upacara Memukur Alm. Putu Yuliarta, ngelinggihang lan nugtug karya ring merajan.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-light)',
    borderTop: '1px solid rgba(212, 175, 55, 0.2)',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
    backgroundImage: 'linear-gradient(rgba(18, 18, 18, 0.75), rgba(18, 18, 18, 0.95)), url(/bg-cover.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  omSwastiastu: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: 'var(--color-gold)',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: 'var(--color-text)',
  }
};

export default Greeting;
