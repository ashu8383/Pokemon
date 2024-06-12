import React from 'react';
import './Header.css';
import Pokedex from '../../assets/images/Pokeball.png';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='pokedex-container'>
        <img
          src={Pokedex}
          alt=''
        />
        <p className='pokedex-name'>Pokédex</p>
      </div>
    </div>
  );
};

export default Header;
