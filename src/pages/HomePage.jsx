import React from 'react';
import { useNavigate } from 'react-router';
import useGetAllIteneraries from '../hooks/useGetAllInteneraries';
import logo from '../assets/logos/Auxo flights 5.svg';
import Button from '../components/Buttom';


export const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/itineraries');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-screen w-full gap-28">
      <img
        src={logo}
        alt="Auxo Logo"
        className="w-[640px] h-auto"
      />
      <Button variant='primary' onClick={handleButtonClick}>
        Start
      </Button>
    </div>
  )
}
