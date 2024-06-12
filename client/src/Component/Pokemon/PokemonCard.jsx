import React from 'react';
import PokemonColors from '../Color';

const PokemonCard = ({ pokemon }) => {
  const pokemonClr = PokemonColors[pokemon.type[0]];

  return (
    <div
      key={pokemon.id}
      className='card-container'
      style={{
        backgroundColor: pokemonClr,
      }}
    >
      <p className='pokemon-id'> #00{pokemon.id}</p>

      <img
        className='pokemons-img'
        src={pokemon.image.hires}
        alt=''
      />
      <div className='details-container'>
        <p
          className='pokemon-name'
          style={{
            color: pokemonClr,
          }}
        >
          {pokemon.name.english}
        </p>
        <div className='type-container'>
          <p
            className='pokemon-type-container'
            style={{
              backgroundColor: pokemonClr,
            }}
          >
            {pokemon.type[0]}
          </p>
          {pokemon.type[1] && (
            <p
              className='pokemon-type-container'
              style={{
                backgroundColor: PokemonColors[pokemon.type[1]],
              }}
            >
              {pokemon.type[1]}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
