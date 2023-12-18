import { BsFillCartFill } from "react-icons/bs"

import './Header.css'

export default function Header({toggleCart}) {
    return (
        <header className='header'>
            <h1>Cellphone Store</h1>

            <button onClick={toggleCart}>
                <BsFillCartFill />
            </button>
        </header>
    )
}