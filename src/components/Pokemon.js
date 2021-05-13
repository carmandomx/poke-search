import { useEffect, useState } from 'react'
import PokemonItem from './PokemonItem'

const Pokemon = ({ url }) => {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonType, setPokemonType] = useState('')
  const [pokemonUrl, setPokemonUrl] = useState('')

  useEffect(() => {
    if (url) {
      console.log('url:', url)
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setPokemonName(data.name)
          setPokemonUrl(data.sprites.front_default)
          setPokemonType(data.types[0].type.name)
        })
    }
  }, [url])
  return (
    <div>
      <PokemonItem name={pokemonName} imgUrl={pokemonUrl} type={pokemonType} />
    </div>
  )
}

export default Pokemon
