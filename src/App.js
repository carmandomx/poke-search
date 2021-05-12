import './App.css'
import { useEffect, useState } from 'react'
import getPoke from './services/getPoke'
import Pokemon from './components/Pokemon'
import Search from './components/Search'

function App () {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonUrl, setPokemonUrl] = useState('')
  const [queryTerm, setQueryTerm] = useState('')

  useEffect(() => {
    if (queryTerm) {
      getPoke(queryTerm).then(res => {
        setPokemonName(res.data.name)
        setPokemonType(res.data.types[0].type.name)
        setPokemonUrl(res.data.sprites.front_default)
      })
    }
  }, [queryTerm])

  return (
    <div className='App'>
      <header className='App-header'>
        <Search handleSearch={setQueryTerm} />
        <Pokemon name={pokemonName} type={pokemonType} imgUrl={pokemonUrl} />
      </header>
    </div>
  )
}

export default App
