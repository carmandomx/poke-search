import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

const getPoke = name => {
  const promise = axios(
    `${baseUrl}pokemon/${encodeURIComponent(name.toLowerCase())}`,
    {
      method: 'GET'
    }
  )

  return promise
}

export default getPoke
