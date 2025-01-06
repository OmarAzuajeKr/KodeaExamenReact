import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SideBar from '../components/SideBar';
import Button from '../components/Buttom'; // Asegúrate de que la ruta sea correcta
import ItinerariesTable from '../components/Table';
import SearchBar from '../components/SearchBar';
import DropDownBar from '../components/DropDownBar';
import filter from '../assets/icons/Active Filter.svg';
import useGetAllIteneraries from '../hooks/useGetAllInteneraries';


export const ItinerariesPage = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState('Most Popular');
  const {itineraries,loading} =useGetAllIteneraries();
  

  const handleSortSelect = (option) => {
    setSortOption(option);
    // Aquí puedes agregar la lógica para ordenar la tabla según la opción seleccionada
  };

  const navigateToDetails = () => {
    navigate('/details');
  };

if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: '20px', marginLeft:'50px', marginTop:30 }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Welcome</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <SearchBar />
          <img
            src={filter}
            alt="Auxo Logo"
            className="w-[48px] h-auto"
          />
          <DropDownBar onSelect={handleSortSelect} />
        </div>
        <div>
          <h1>Select the intinerary from the list below </h1>
        </div>
        <ItinerariesTable itineraries={itineraries} />
      </div>
    </div>
  );
};
