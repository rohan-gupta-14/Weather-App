import React, { useState } from 'react';
import './index.css'; 

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="app-container">
      
      <div className="navbar">
        <div className="logo">🌤 Weather App</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Forecast</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default App;
