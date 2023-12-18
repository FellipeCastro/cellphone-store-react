import { BsFillCartFill } from "react-icons/bs"

import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>Cellphone Store</h1>

            <button>
                <BsFillCartFill />
            </button>
        </header>
    )
}