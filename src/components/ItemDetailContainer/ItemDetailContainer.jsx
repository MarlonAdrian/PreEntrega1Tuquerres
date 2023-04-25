import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {Link, NavLink, useParams} from "react-router-dom"
import Item from "../Item/Item"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import {mFetch} from "../../utils/mFetch"
import ItemList from "../ItemList/ItemList"


const ItemDetailContainer=({})=>{
    const {pid}=useParams()
    const [products, setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        if (!pid) {
            <Item/>
        } else {
            mFetch()
            .then(
                productos=>setProducts(productos.filter(products=>products.pid===pid))
            ).catch(
                error=>console.error(error)
            ).finally(()=>setIsLoading(false))
            console.log(pid)
        }
    }, [pid])
    
}
export default ItemDetailContainer
//enviar promesa para 