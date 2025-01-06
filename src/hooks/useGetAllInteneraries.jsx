import { useState, useEffect } from 'react';

function useGetAllIteneraries() {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch('http://localhost:3010/itineraries');
        const data = await response.json();
        setItineraries(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, []);

  return { itineraries, loading, error };
}

export default useGetAllIteneraries;