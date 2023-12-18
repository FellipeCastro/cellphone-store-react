import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CellCard from './components/CellCard'
import Cart from './components/Cart'

function App() {

  const [cells, setCells] = useState([])
  const [cart, setCart] = useState([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [total, setTotal] = useState(0)

  const addOnCart = (cell) => {
    setCart((prevCart) => [...prevCart, cell])
    addTotal()
  }

  const removeToCart = (cellId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== cellId))
    addTotal()
  }

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen)
  }

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0)
    setTotal(newTotal)
  }, [cart])

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
      <Header 
        toggleCart={toggleCart}
        cartIsOpen={cartIsOpen}
        items={cart.length}
      />

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

        {cartIsOpen && (
          <Cart 
            cell={cart}
            removeToCart={removeToCart}
            total={total}
          />
        )}

      </div>
      
      <Footer />
    </>
  )
}

export default App
