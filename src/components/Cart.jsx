import {  BsFillCartDashFill  } from "react-icons/bs"

import './Cart.css'

export default function Cart({cell, removeToCart, total}) {
    return (
        <div className="cart">
            <div className="items-container">
                {cell.length > 0 ? (
                    cell.map((cell) => {
                        return (
                            <div className="item">
                                <img src={cell.thumbnail} alt={cell.title} />
                                <div className="text-container">
                                    <h2>{cell.title}</h2>
                                    <p>R$ {cell.price.toFixed(2)}</p>
                                </div>
                                <button className="remove-btn" onClick={() => removeToCart(cell.id)}>
                                    <BsFillCartDashFill />
                                </button>
                            </div>
                        )
                    })
                ) : (
                    <p className="empty-cart">Seu carrinho esta vazio!</p>
                )}
            </div>

            <div className="total-container">
                <p>Total: R$ {total.toFixed(2)}</p>
                <button className="buy-btn">Comprar</button>
            </div>
        </div>
    )
}