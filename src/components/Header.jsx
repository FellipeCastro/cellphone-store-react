import { BsFillCartFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io";

import './Header.css'

export default function Header({toggleCart, cartIsOpen, items}) {
    return (
        <header className='header'>
            <h1>Cellphone Store</h1>

            <button onClick={toggleCart}>
                {cartIsOpen ? <IoMdClose /> : (
                    <>
                        {items >= 1 && <span className="couter">{items}</span>}
                        <BsFillCartFill />  
                    </>
                )}                
            </button>
        </header>
    )
}