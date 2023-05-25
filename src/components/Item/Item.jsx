import { memo, useEffect, useState } from "react"
import {Link, NavLink} from "react-router-dom"


const Item= memo(({id,title,foto, price, categoria})=>{

    return(
        <div style={{
            padding:'10px' 
        }}>
<section className="py-5 bg-dark" >
    
            <div className="container px-4 px-lg-5 mt-5">
                
            <div className="card h-100">
                <img src={foto} className="w-25"/*className="card-img-top"*/ alt="imagen-card"/>
                <div >
                    <h4>{title}</h4>
                    <label>Precio: ${price}</label>
                    <h6>{categoria}</h6>
                </div>
                <div className="card-footer">
                    <Link to={`/detail/${id}`}>
                        <button className="btn btn-outline-dark">+ Info</button>    
                    </Link>
                </div>
            </div>    


            </div>

</section>            
        </div>
    )

}
)
export default Item
