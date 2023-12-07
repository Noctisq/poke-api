
export function PokemonTypeList({ types }) {
    return (
        <>
            {types && types.map(type =><img key={type.type.name} className='type-img' alt={type.type.name} src={`../../pokemon_types/${type.type.name}.svg`}/>)}
        </>

        
    );

}

export default PokemonTypeList;