import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import Item from "../Item/Item"
import {mFetch} from "../../utils/mFetch"


const ItemListContainer=({greeting})=>{
    const{categoria}=useParams()
    console.log(categoria)
    const [products, setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true)
//aqui deberia ir el useffect del item.jsx ylo seteamos con
//setProducts. y pasar los datos (productos) al itemlist
//mediante props. Itemlist mapea y lo pasa a las card
    useEffect(()=>{
        if (!categoria) {
            <Item/>
        } else {
            mFetch()
            .then(
                productos=>setProducts(productos.filter(products=>products.categoria===categoria))
            ).catch(
                error=>console.error(error)
            ).finally(()=>setIsLoading(false))
            console.log(true)      
        }
    },[categoria])
    return(
    <>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">
                    {greeting}
                </h1>
                <p className="lead fw-normal text-white-50 mb-0">
                Shop in style!!
                </p>
            </div>
            </div>
        </header>
        <ItemList/> 
    </> 
    )
}
export default ItemListContainer
