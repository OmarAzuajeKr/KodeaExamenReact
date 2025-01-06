// src/components/DropDownBar.jsx
import React from 'react';
import Select from 'react-select';
import mostPopularIcon from '../../assets/icons/mostPopularIcon.svg';
import priceIcon from '../../assets/icons/priceIcon.svg';
import rateIcon from '../../assets/icons/rateIcon.svg';

const options = [
  { value: 'Most Popular', label: <div style={{ display: 'flex', alignItems: 'center' }}><img src={mostPopularIcon} alt="Most Popular" style={{ marginRight: '10px' }} />Most Popular</div> },
  { value: 'Price', label: <div style={{ display: 'flex', alignItems: 'center' }}><img src={priceIcon} alt="Price" style={{ marginRight: '10px' }} />Price, Low to High</div> },
  { value: 'Rate', label: <div style={{ display: 'flex', alignItems: 'center' }}><img src={rateIcon} alt="Rate" style={{ marginRight: '10px' }} />Rate, Low to High</div> }
];

const DropDownBar = ({ onSelect }) => {
  const handleChange = (selectedOption) => {
	onSelect(selectedOption.value);
  };

  return (
	<Select
	  options={options}
	  onChange={handleChange}
	  styles={{
		control: (provided) => ({
		  ...provided,
		  padding: '10px',
		  width: '200px'
		}),
		option: (provided) => ({
		  ...provided,
		  display: 'flex',
		  alignItems: 'center'
		})
	  }}
	/>
  );
};

export default DropDownBar;