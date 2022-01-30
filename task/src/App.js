import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .get('http://api.worldbank.org/V2/incomeLevel/LIC/country?format=json')
      .then((res) => {
        setList(res.data[1])
        console.log(res.data[1])
      })
      .catch((error) => console.log(error))

    // eslint-disable-next-line no-undef
  }, [])

  return (
    <div className='country-app'>
      <h1 className='country-text'>Countries List</h1>

      {list.map((country) => {
        return (
          <Countries
            key={country.id}
            name={country.name}
            code={country.iso2Code}
            income={country.incomeLevel.value}
          />
        )
      })}
    </div>
  )
}

export default App
