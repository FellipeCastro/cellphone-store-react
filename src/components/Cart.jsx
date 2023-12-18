import {  BsFillCartDashFill  } from "react-icons/bs"

import './Cart.css'

export default function Cart({cell, removeToCart}) {
    return (
        <div className="cart">
            {cell.length > 0 ? (
                cell.map((cell) => {
                    return (
                        <div className="item">
                            <img src={cell.thumbnail} alt={cell.title} />   
                            <div className="text-container">
                                <h2>{cell.title}</h2>
                                <p>R$ {cell.price}</p>
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

            <button className="buy-btn">Comprar</button>
        </div>
    )
}