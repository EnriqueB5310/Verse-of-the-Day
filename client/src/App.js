import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [verse, setVerse] = useState({});

  useEffect(() => {
    fetchVerseOfTheDay();
  }, []);

  const fetchVerseOfTheDay = async () => {
    try {
      const response = await fetch('/api/verse-of-the-day');
      const data = await response.json();
      setVerse(data);
    } catch (error) {
      console.error('Error fetching verse:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bible Verse of the Day</h1>
        <div className="Verse-container">
          <p>{verse.text}</p>
          <p>{verse.reference}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
