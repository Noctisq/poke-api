import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { PokemonCard } from './components/PokemonCard'
function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=60").then(data => {
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

      <section className='pokemon-list'>
        {pokemonList.length > 0 &&
          pokemonList.map(value => <PokemonCard data={value} />)
        }
      </section>

      <footer>
        ahhh
      </footer>
    </div>
  );
}


export default App;
