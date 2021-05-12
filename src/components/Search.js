import { useState } from 'react'

const Search = ({ handleSearch }) => {
  const [value, setValue] = useState('')

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          handleSearch(value)
        }}
      >
        Search
      </button>
    </>
  )
}

export default Search
