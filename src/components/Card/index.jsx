// src/components/Card.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router';
import useGetLegById from '../../hooks/useGetLegById';
import baseIcon from '../../assets/icons/baseIcon.svg';
import selectedIcon from '../../assets/icons/selectedIcon.svg';
import wizzair from '../../assets/logos/wizzair.svg';
import lufthansa from '../../assets/logos/lufthansa.svg';
import britishAirways from '../../assets/logos/britishAirway.svg';


const iconsMatch2 = {
  "Lufthansa":lufthansa,
  "Wizz Air":wizzair,
  "British Airways":britishAirways
}


const Card = ({
  leg,
}) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };


  return (
    <div 
      style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      onClick={handleClick}
    >
      <img src={selected ? selectedIcon : baseIcon} alt="icon" style={{ marginRight: '20px' }} />
      <div>
        <h2>{leg.id}</h2>
        <p>{leg.airline_name}</p>
        <p>Airline ID: {leg.airline_id}</p>
        <p>{leg.departure_airport}</p>
        <p>{leg.arrival_airport}</p>
        <p>{leg.arrival_time}
        <img src={iconsMatch2[leg.airline_name]} alt="logo" style={{ width: '50px', height: '50px' }} />
          </p>  
        <p>Stops: {leg.stops}</p>
        <p>Duration (mins):{leg.duration_mins}</p>
      </div>
    </div>
  );
};

export default Card;