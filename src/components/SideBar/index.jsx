import React from 'react';
import logo from '../../assets/logos/Auxo flights 5.svg';
import Button from '../Buttom'; 
import itinerariesIcon from '../../assets/icons/itinerariesIcon.svg';
import logoutIcon from '../../assets/icons/logOutIcon.svg';

const SideBar = () => {
  return (
	<div style={{ width: '200px', background: '#FFFFFF', padding: '10px', borderRight: '3px solid #426294', height: '95vh', marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
	  <div>
		<img
		  src={logo}
		  alt="Auxo Logo"
		  style={{ width: '100%', height: 'auto' }}
		/>
		<ul style={{ marginTop: '40px' }}>
		  <li>
			<Button onClick={() => window.location.href = 'Itineraries'} variant="primary" style={{ display: 'flex', alignItems: 'center' }}>
			  <img src={itinerariesIcon} alt="Itineraries Icon" style={{ marginRight: '5px', marginLeft:'-40px' }} />
			  Itineraries
			</Button>
		  </li>
		</ul>
	  </div>
	  <div style={{ marginBottom: '20px' }}>
		<button
		  onClick={() => window.location.href = '/'}
		  style={{
			backgroundColor: '#FFFFFF',
			color: '#000000',
			padding: '10px 20px',
			border: 'none',
			borderRadius: '5px',
			fontSize: '16px',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center'
		  }}
		>
		  <img src={logoutIcon} alt="Log Out Icon" style={{ marginRight: '10px' }} />
		  Log out
		</button>
	  </div>
	</div>
  );
};

export default SideBar;