
export function PokemonTypeList({ types }) {
    return (
        <>
            {types && types.map(type =><img className='type-img' src={`../../pokemon_types/${type.type.name}.svg`}/>)}
        </>

        
    );

}

export default PokemonTypeList;