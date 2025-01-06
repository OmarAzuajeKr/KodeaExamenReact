import React, { useState } from 'react';
import searchIcon from '../../assets/icons/searchIcon.svg';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
	setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
	if (e.key === 'Enter') {
	  onSearch(query);
	}
  };

  return (
	<div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
	  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
		<img src={searchIcon} alt="Search Icon" style={{ position: 'absolute', left: '10px', width: '20px', height: '20px' }} />
		<input
		  type="text"
		  value={query}
		  onChange={handleInputChange}
		  onKeyPress={handleKeyPress}
		  placeholder="Search..."
		  style={{ padding: '10px 10px 10px 35px', width: '200px', marginRight: '5px' }}
		/>
	  </div>
	</div>
  );
};

export default SearchBar;