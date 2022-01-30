import './Countries.css'

const Countries = ({ name, code, income }) => {
  return (
    <div className='country-container'>
      <div className='country-row'>
        <div className='country'>
          <h1>{code}</h1>
        </div>
        <div className='country-data'>
          <p>{name}</p>
          <p>{income}</p>
        </div>
      </div>
    </div>
  )
}

export default Countries
