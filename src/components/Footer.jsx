import { FaInstagram, FaFacebook, FaWhatsapp  } from "react-icons/fa"

import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <h1>Cellphone Store</h1>

            <ul className='social-list'>
                <li>
                    <a href="#">
                        <FaInstagram /> - celphonestore_ofc
                    </a>
                </li>

                <li>
                    <a href="#">
                        <FaFacebook /> - Cellphone Store Oficial
                    </a>
                </li>
                
                <li>
                    <a href="#">
                        <FaWhatsapp /> - (00) 00000-0000
                    </a>
                </li>
            </ul>
        </footer>
    )
}