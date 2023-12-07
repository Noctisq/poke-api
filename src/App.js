import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard'
import Pagination  from './components/Pagination';
import Loader from './components/Loader';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon/?limit=30");
  const [nextPage, setnextPage] = useState(null);
  const [previousPage, setpreviousPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(currentPage).then(data => {
      return data.json();
    }).then(response => {
      setPokemonList(response.results);
      setIsLoading(false);
      setnextPage(response.next)
      setpreviousPage(response.previous);
    }).catch(err => {
      console.log(err);
    })
    return () => setIsLoading(true)
  }, [currentPage]);



  return (
    <div className="App">
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <section className='pokemon-data'>
            <ul className='pokemon-list'>
              {pokemonList.length > 0 &&
                pokemonList.map((pokemon, index) => (
                  <PokemonCard key={index} data={pokemon} />
                ))}
            </ul>
          </section>

          <footer>
            {pokemonList && (
              <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </footer>
        </>
      )}
    </div>
  );
}


export default App;
