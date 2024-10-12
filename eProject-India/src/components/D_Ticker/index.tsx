import React, { useEffect, useState } from 'react';

const D_ticker: React.FC = () => {
  const [data, setData] = useState<{ name: string; country: string; localtime: string } | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const apiKey = 'c9a0ca46550648b29ce125849232709';

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no&lang=en`
          );
          const result = await response.json();
          setData({
            name: result.location.name,
            country: result.location.country,
            localtime: result.location.localtime,
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchWeatherData();
  }, [location]);

  // Geolocation feature of HTML5 to get user location
  useEffect(() => {
    const getLocation = () => {
      // Check if geolocation is available
      if (navigator.geolocation) {
        // Try to get the current position
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const showPosition = (position: GeolocationPosition) => {
    // Get latitude and longitude from position object
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`${latitude},${longitude}`); // Set the location to coordinates
  };

  const handleError = (error: GeolocationPositionError) => {
    if (error.code === error.PERMISSION_DENIED) {
      setError('Location access denied. Click the button below to try again.');
    }
  };

  const handleManualLocation = () => {
    setError(null);
    // Try to get the user's location again
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Scroll behavior logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up or stopping
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-2 flex justify-center items-center transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } ${isVisible ? 'bg-orange-500' : 'bg-gray-800'}`}  // bg color when shown or hidden
    >
      <div className="font-outfit flex items-center space-x-4 text-sm">
        {data ? (
          <>
            <h1 className="text-white font-outfit">{data.name}</h1>
            <p className="text-white font-outfit">-</p>
            <p className="text-white font-outfit">Country: {data.country}</p>
            <p className="text-white font-outfit">-</p>
            <p className="text-white font-outfit">Time: {data.localtime}</p>
          </>
        ) : (
          <p className="text-white font-outfit">Loading...</p>
        )}
        {error && <p className="text-white text-center font-outfit">{error}</p>}
        {error && (
          <button onClick={handleManualLocation} className="bg-white hover:bg-[#5b9a42] hover:text-white text-orange-500 p-1 rounded">
            Try Again for Location
          </button>
        )}
      </div>
    </div>
  );
};

export default D_ticker;