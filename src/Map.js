// Map.js

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  // Mendefinisikan redCircleIcon di luar useEffect
  const redCircleIcon = L.divIcon({
    className: 'red-circle-icon',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

  useEffect(() => {
    const map = L.map('map').setView([-1.1057614895977395, 113.87535787965106], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(map);

    const markers = [
      {
        coordinates: [-1.1057614895977395, 113.87535787965106],
        message: 'Ini adalah marker pertama'
      },
      {
        coordinates: [-1.0207845828238362, 116.9814126725039],
        message: 'Ini adalah marker kedua'
      },
      {
        coordinates: [1.2738282841820023, 110.05073817203231],
        message: 'Ini adalah marker ketiga'
      }
    ];

    markers.forEach(markerData => {
      const marker = L.marker(markerData.coordinates, {
        draggable: true,
        icon: redCircleIcon // Menggunakan redCircleIcon yang sudah didefinisikan di luar useEffect
      }).addTo(map);

      marker.bindPopup(markerData.message);
    });
  }, [redCircleIcon]); // Pastikan redCircleIcon disertakan dalam dependency array

  return <div id="map" className="map-container" />;
};

export default Map;
