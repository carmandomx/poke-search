import './App.css'
import { useEffect, useState } from 'react'
import getPoke from './services/getPoke'
import getPokeByType from './services/getPokeByType'
import Pokemon from './components/Pokemon'
import Search from './components/Search'
import PokemonItem from './components/PokemonItem'

function App () {
  const [queryTerm, setQueryTerm] = useState('')
  const [numOfPokemons, setNumOfPokemons] = useState(10)
  // Para trabajar con listas deben usar de base un arreglo
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    if (queryTerm) {
      getPokeByType(queryTerm).then(res => {
        setPokemons(res.data.pokemon.slice(0, numOfPokemons))
      })
    }
  }, [queryTerm, numOfPokemons])

  const list = pokemons.map(value => {
    return <Pokemon url={value.pokemon.url} key={value.pokemon.name} />
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <Search
          handleSearch={setQueryTerm}
          handleChangeAmount={setNumOfPokemons}
        />
        {list}
      </header>
    </div>
  )
}

export default App
