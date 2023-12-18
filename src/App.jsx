import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CellCard from './components/CellCard'

function App() {

  const [cells, setCells] = useState([])
  const [cart, setCart] = useState([])
  const [isOnCart, setIsOnCart] = useState(false)

  const addOnCart = (cell) => {
    setCart((prevCart) => [...prevCart, cell])
    console.log(cart)
  }

  const removeToCart = (cellId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== cellId))
    console.log(cart)
  }

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
                isOnCart={cart.some((item) => item.id === cell.id)}
                addOnCart={() => addOnCart(cell)}
                removeToCart={() => removeToCart(cell.id)}
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
