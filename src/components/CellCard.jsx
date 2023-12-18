import { BsFillCartPlusFill, BsFillCartDashFill  } from "react-icons/bs";

import './CellCard.css'

export default function Cellphones({cell}) {
    return (
        <div key={cell.id} className="card">
            <h2>{cell.title}</h2>
            <img src={cell.thumbnail} alt={cell.title} />            
            <p>R$ {cell.price}</p>
        </div>
    )
}