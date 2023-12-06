import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {


  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(()=> {

    fetch("https://pokeapi.co/api/v2/pokemon/").then(data => {
       return data.json()
    }).then(response => { 
      console.log(response.results)
      setPokemonList(response.results);

    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { pokemonList.length > 0 && 
          pokemonList.map(value => <Pokemon data = {value} />)
        }
      </header>
    </div>
  );
}


function Pokemon ({data}) {
  const [pokemonData, setPokemonData] = useState()


   useEffect(()=> {
    fetch(data.url).then(data => {
       return data.json()
    }).then(response => {
      console.log(response) 
      setPokemonData(response);
      console.log(pokemonData);
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      {pokemonData &&  <h1> {pokemonData.name} </h1>}
      {pokemonData &&  <img src={pokemonData.sprites.front_default}/>  }
      {pokemonData &&  pokemonData.types.map(type => <h1>{type.type.name}</h1>) } 

    </div>
  );

}
export default App;
