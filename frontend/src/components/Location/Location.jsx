import React, { useState, useEffect } from 'react';

function Location() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400">
      <h2 className="text-4xl font-bold mb-4 text-white">Your Location</h2>
      {location.latitude && <p className="text-2xl text-black font-bold">Latitude: {location.latitude}</p>}
      {location.longitude && <p className="text-2xl text-black font-bold">Longitude: {location.longitude}</p>}
    </div>
  );
}

export default Location;