// src/App.js

import React from 'react';
import Navbar from './Navbar'; // Sesuaikan dengan path yang sesuai
import Map from './Map'; 
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="image-outside-navbar">
          <img src="kaleka-farmer1.jpg" alt="Kaleka Farmer" />
        </div>
      <Map />
    </div>
      );
};

export default App;
