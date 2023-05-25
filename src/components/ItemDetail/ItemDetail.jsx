import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const ItemDetail=({products})=>{
    const [isAmount, setIsAmount]=useState(false)
    const {addToCart}=useCartContext() //new

    const onAdd=(cantidad)=>{
        addToCart( { ... products, cantidad } )//new
        console.log('cantidad seleccionada del producto||: ',cantidad)
        setIsAmount(true)
        // return(amount)
    }

    return(
        <center>
            <section className="py-5 bg-dark" >
                <div className="row" style={{color:'white'}}>
                    <center>
                    <br/>
                        <img src={products.foto} className="w-25" /*alt="imagen"*/ />
                    </center>
                    <h4>{products.title}</h4>
                    <h4>Description: {products.description}</h4>
                    <h5>${products.price}</h5>
                    {/* <h5>{products.categoria}</h5> */}
                    {
                        isAmount?
                            <>
                                <Link to={'/'} className="btn btn-outline-primary">
                                    Cancelar compra
                                </Link>
                                <Link to={'/cart'} className="btn btn-outline-success">
                                    Continuar Compra
                                </Link>
                            </>                          
                        :
                            <ItemCount onAdd={onAdd}/>   
                    }
                </div>
            </section>

                {/* <ItemCount onAdd={onAdd}/> */}
 


        </center>
    )
}
export default ItemDetail

