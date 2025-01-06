import { useState, useEffect } from 'react';

function useGetLegById(id) {
  const [leg, setLeg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchLegById = async () => {
      try {
        const response = await fetch(`http://localhost:3010/legs/${id}`);
        const data = await response.json();
        setLeg(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLegById();
  }, []);

  return { leg, loading, error };
}

export default useGetLegById;