import React, { useEffect, useState } from 'react';
import './Pokemon.css';
import Searchbar from '../Ui/Searchbar/Searchbar';

import PokemonCard from './PokemonCard';
import { API } from '../../utililty/API';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, _] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    API.get(
      `http://localhost:5000/v3/pokemon?page=${currentPage}&q=${searchQuery}&type=`
    )
      .then((response) => {
        // console.log('API Response:', response.data);
        if (currentPage === 1) {
          setPokemonData(response.data.data);
        } else {
          setPokemonData((prevData) => [...prevData, ...response.data.data]);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('API Error:', error);
        setIsLoading(false);
      });
  }, [currentPage, searchQuery]);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className='outter'>
      <Searchbar onSearch={handleSearch} />
      <div className='aaa'>
        <div className='pokemon-container'>
          {pokemonData.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : hasMore && pokemonData.length >= 8 ? (
          <button
            onClick={handleLoadMore}
            className='load-more-button'
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PokemonList;
