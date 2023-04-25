import { useEffect, useState } from "react"
import {mFetch} from "../../utils/mFetch"
import ItemCount from "../ItemCount/ItemCount"
import {Link, NavLink} from "react-router-dom"


const Item=()=>{

    const [products, setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        mFetch()
        .then(
            productos=>setProducts(productos)
        ).catch(
            error=>console.error(error)
        ).finally(()=>setIsLoading(false))
    })


    return(
        <div style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
        
            { isLoading ? 
                    <h2>Cargando productos..</h2>
                :
                    products.map(({id,price,foto,title,description,categoria})=>
                    <div key={id} className="card w-25">
                    <img src={foto} className="card-img-top" alt="imagen-card"/>
                    <div className="card-body">
                            <h6>Nombre: {id}</h6>
                            <label>Precio: {price}</label>
                            <ItemCount/>
                    </div>
                    <Link to={`/detail/${id}`}>
                        <button className="btn btn-outline-dark">Detalle {id}</button>    
                    </Link>
                </div>    
                )
            }
        </div>
    )
}
export default Item