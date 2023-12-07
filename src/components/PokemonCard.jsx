import { useEffect, useState } from 'react';
import { PokemonTypeList } from './PokemonTypeList'
export function PokemonCard({ data }) {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        fetch(data.url).then(data => {
            return data.json()
        }).then(response => {
            console.log(response)
            setPokemonData(response);
            console.log(pokemonData);
        }).catch(err => {
            console.log(err);
        })

    }, []);
    return (
        <div className='pokemon-card'>

            <div className='pokemon-title'>

                <div className='pokemon-number'>
                    {pokemonData && <h4>  #{pokemonData.id} </h4>}

                </div>

                <div className='pokemon-name'>
                    {pokemonData && <h4> {pokemonData.name} </h4>}
                </div>


            </div>

            {pokemonData && <img src={pokemonData.sprites.front_default} />}

            <div className='pokemon-types'>
                {pokemonData && <PokemonTypeList types={pokemonData.types} />}
            </div>


        </div>
    );

}

export default PokemonCard;