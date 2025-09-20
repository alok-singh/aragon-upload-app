import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: 60 }}>
    <h1>Welcome to Aragon.ai Photo Uploader</h1>
    <p>
      <Link to="/upload" style={{
        display: 'inline-block',
        marginTop: 24,
        background: '#F9B233',
        color: '#222',
        fontWeight: 600,
        borderRadius: 6,
        padding: '12px 28px',
        fontSize: 18,
        textDecoration: 'none'
      }}>
        Go to Upload Page
      </Link>
    </p>
  </div>
);

export default Home;
