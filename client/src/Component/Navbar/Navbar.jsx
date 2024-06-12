import React from 'react';
import './Navbar.css';
import Pokedex from '../../assets/images/Pokeball.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../../constants/LOCAL_STORAGE_KEYS.JS';

const Navbar = () => {
  const { getItem } = useLocalStorage();
  const authData = getItem(LOCAL_STORAGE_KEYS.AUTH_KEY);
  return (
    <>
      <div className='navbar-container'>
        <div className='pokedex-details'>
          <img
            src={Pokedex}
            alt=''
          />
          <p className='pokedex-name'>Pokédex</p>
        </div>
        <div className='user-details'>
          <img
            className='user-avtar'
            src={authData.avatar}
            alt=''
          />
          <p>{authData.fullname}</p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </>
  );
};

export default Navbar;
