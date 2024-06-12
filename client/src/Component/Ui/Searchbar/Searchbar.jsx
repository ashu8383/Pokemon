import React, { useRef, useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  const validate = () => {
    const searchQuery = inputRef.current.value.trim();
    if (searchQuery.length >= 0) {
      onSearch(searchQuery);
    }
  };

  // const handleSearch = (query) => {
  //   validate(query.includes(inputRef.current.value.trim()));
  // };

  const handleChange = (e) => {
    // e.preventDefault();
    setValue(validate);
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const searchQuery = inputRef.current.value.trim();
  //   if (searchQuery.length > 0) {
  //     onSearch(searchQuery);
  //   } else {
  //     alert('Please enter a valid Name..');
  //   }
  //   setValue(searchQuery);
  // };
  // const handleSearch = (query) => {
  //   const searchQuery = query.includes(inputRef.current.value.trim());
  //   if (searchQuery.length > 0) {
  //     onSearch(searchQuery);
  //   } else {
  //     alert('Please enter a valid Name..');
  //   }
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     const searchQuery = inputRef.current.value.trim();
  //     if (searchQuery.length > 0) {
  //       onSearch(searchQuery);
  //     } else {
  //       alert('Please enter a valid Name.');
  //     }
  //   }
  // };

  return (
    <div className='outer-container'>
      <div className='searchbar-container'>
        <i
          className='fa fa-search'
          // onClick={handleSearch}
        ></i>
        <input
          ref={inputRef}
          onChange={handleChange}
          value={value}
          placeholder='Search by name'
        />
      </div>
    </div>
  );
};

export default Searchbar;
