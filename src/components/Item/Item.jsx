import { memo, useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"


const Item= memo(({id,title,foto, price, categoria})=>{

    return(
            <div  className="card w-25">
                <img src={foto} className="card-img-top" alt="imagen-card"/>
                <div className="card-body">
                    <h4>{title}</h4>
                    <label>Precio: ${price}</label>
                    <label>Categoria: {categoria}</label>
                </div>
                <Link to={`/detail/${id}`}>
                 <button className="btn btn-outline-dark">+ Info</button>    
                </Link>
            </div> )       

}
)
export default Item