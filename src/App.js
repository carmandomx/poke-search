import './App.css'
import { useEffect, useState } from 'react'
import getPoke from './services/getPoke'
import getPokeByType from './services/getPokeByType'
import Pokemon from './components/Pokemon'
import Search from './components/Search'

function App () {
  const [queryTerm, setQueryTerm] = useState('')
  const [pokeUrl, setPokeUrl] = useState('')
  const [pokeUrlTwo, setPokeUrlTwo] = useState('')
  const [pokeUrlThree, setPokeUrlThree] = useState('')

  useEffect(() => {
    if (queryTerm) {
      getPokeByType(queryTerm).then(res => {
        console.log(res.data)
        setPokeUrl(res.data.pokemon[0].pokemon.url)
        setPokeUrlTwo(res.data.pokemon[1].pokemon.url)
        setPokeUrlThree(res.data.pokemon[2].pokemon.url)
      })
    }
  }, [queryTerm])

  return (
    <div className='App'>
      <header className='App-header'>
        <Search handleSearch={setQueryTerm} />
        <Pokemon url={pokeUrl} />
        <Pokemon url={pokeUrlTwo} />
        <Pokemon url={pokeUrlThree} />
      </header>
    </div>
  )
}

export default App
