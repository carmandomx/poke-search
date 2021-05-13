import { useState } from 'react'

const Search = ({ handleSearch, handleChangeAmount }) => {
  const [value, setValue] = useState('')
  const [amount, setAmount] = useState(10)
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <input
        type='number'
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button
        onClick={() => {
          handleSearch(value)
          handleChangeAmount(amount)
        }}
      >
        Search
      </button>
    </>
  )
}

export default Search
