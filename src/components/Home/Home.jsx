// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Moodify</h1>
      <Link to="/login">Login with Spotify</Link>
    </div>
  );
}

