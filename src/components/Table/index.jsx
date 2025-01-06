
import React from 'react';
import { useNavigate } from 'react-router';
import {iconsMatch} from '../../utils/iconMatch';

const ItinerariesTable = ({ itineraries }) => {
  const navigate = useNavigate();

  const handleRowClick = (legs) => {
    navigate(`/details/${legs[0]}/${legs[1]}`);
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginRight: '50' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID Itineraries</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Agent</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Agent Rating</th>
        </tr>
      </thead>
      <tbody>
        {itineraries.map((itinerary) => (
          <tr key={itinerary.id} onClick={() => handleRowClick(itinerary.legs)} style={{ cursor: 'pointer' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{itinerary.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{itinerary.price}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              {itinerary.agent}
              <img src={iconsMatch[itinerary.agent]} alt="logo" style={{ width: '50px', height: '50px' }} />
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{itinerary.agent_rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItinerariesTable;