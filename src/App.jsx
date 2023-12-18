import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CellCard from './components/CellCard'

function App() {

  const [cells, setCells] = useState([])

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular/')
    .then((res) => res.json())
    .then((data) => {
      setCells(data.results)
    })
    .catch((err) => console.log(err))
  }, [])
  


  return (
    <>
      <Header />

      <div className='container'>
        <div className="card-container">
          {cells.map((cell) => {
            return (
              <CellCard
                cell={cell}
              />
            )
          })}
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App
