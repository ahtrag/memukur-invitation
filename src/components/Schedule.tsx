import React from 'react';

const Schedule: React.FC = () => {
  const scheduleData = [
    {
      date: 'Sabtu, 21 Maret 2026',
      events: [
        { time: '10.00', desc: 'Ngulapin, Ngangget Don Bingin', loc: 'Jaba Pura Nangsaran' },
        { time: '13.00', desc: 'Ngajum Sekah', loc: 'Peyadnyan' },
        { time: '15.00', desc: 'Mlaspas Puspa', loc: 'Peyadnyan' },
      ],
      mapLink: null
    },
    {
      date: 'Senin, 23 Maret 2026',
      events: [
        { time: '09.00', desc: 'Mendak Toya Ning', loc: 'Selat' },
        { time: '13.00', desc: 'Atma Wedana, Purwa Daksina', loc: 'Peyadnyan' },
        { time: '22.00', desc: 'Mepralina Ngeseng', loc: 'Peyadnyan' },
        { time: '23.00', desc: 'Ngedetin / Ngulapin, Nganyut', loc: 'Segara Masceti' },
      ],
      mapLink: null
    },
    {
      date: 'Selasa, 24 Maret 2026',
      events: [
        { time: '07.00', desc: 'Meajar - ajar', loc: 'Goa Lawah, Besakih, Silayukti' },
      ],
      mapLink: null
    },
    {
      date: 'Rabu, 25 Maret 2026',
      events: [
        { time: '10.00', desc: 'Ngelinggihang', loc: 'Merajan Bona' },
        { time: '13.00', desc: 'Nugtug Karya Piodalan', loc: 'Merajan Bona' },
      ],
      mapLink: null
    }
  ];

  return (
    <section className="section-padding" style={styles.section}>
      <div className="text-center">
        <h2 style={styles.title}>Dudonan Upacara Memukur</h2>
        <div style={styles.divider}></div>
      </div>
      
      <div style={styles.timeline}>
        {scheduleData.map((day, idx) => (
          <div key={idx} style={styles.dayCard}>
            <h3 style={styles.dateHeader}>{day.date}</h3>
            
            <ul style={styles.eventList}>
              {day.events.map((evt, eIdx) => (
                <li key={eIdx} style={styles.eventItem}>
                  <div style={styles.timeBox}>
                    <span style={styles.time}>{evt.time}</span>
                  </div>
                  <div style={styles.eventDetails}>
                    <p style={styles.desc}>{evt.desc}</p>
                    <p style={styles.loc}>📍 {evt.loc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center" style={{marginTop: '4rem'}}>
        <h3 style={styles.locTitle}>Lokasi Rumah Alm.</h3>
        <p style={{marginBottom: '1rem'}}>(Bona, Gianyar)</p>
        <iframe 
          src="https://maps.google.com/maps?q=-8.557526,115.313872&t=m&z=17&output=embed&iwloc=near"
          width="100%" 
          height="300" 
          style={{ border: 0, borderRadius: '8px', marginTop: '1rem', maxWidth: '600px' }}
          allowFullScreen
          loading="lazy"
          title="Lokasi Rumah Alm."
        ></iframe>
      </div>
    </section>
  );
};

const styles = {
  section: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
  },
  divider: {
    width: '60px',
    height: '2px',
    backgroundColor: 'var(--color-gold)',
    margin: '1.5rem auto 3rem auto',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
  dayCard: {
    backgroundColor: 'rgba(30, 30, 30, 0.6)',
    padding: '2rem',
    borderRadius: '12px',
    borderLeft: '4px solid var(--color-gold)',
  },
  dateHeader: {
    fontSize: '1.5rem',
    color: 'var(--color-text)',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
    paddingBottom: '0.8rem',
  },
  eventList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  eventItem: {
    display: 'flex',
    gap: '1.5rem',
  },
  timeBox: {
    minWidth: '70px',
  },
  time: {
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    color: 'var(--color-gold)',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  eventDetails: {
    flex: 1,
  },
  desc: {
    fontSize: '1.1rem',
    marginBottom: '0.4rem',
  },
  loc: {
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
  },
  locTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  }
};

export default Schedule;
