import { useEffect, useState } from 'react';
import { PokemonTypeList } from './PokemonTypeList';

export default function PokemonCard({ data }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(data.url)
      .then(data => data.json())
      .then(response => {
        setPokemonData(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, [data]);

  return (
    <li className='pokemon-card'>
      {pokemonData && (
        <>
          <div className='pokemon-title'>
            <div className='pokemon-number'>
              <h4>#{pokemonData.id}</h4>
            </div>
            <div className='pokemon-name'>
              <h4>{pokemonData.name}</h4>
            </div>
          </div>

          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />

          <div className='pokemon-types'>
            <PokemonTypeList types={pokemonData.types} />
          </div>
        </>
      )}
    </li>
  );
}
