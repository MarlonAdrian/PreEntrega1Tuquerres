import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {Link, NavLink, useParams} from "react-router-dom"
import Item from "../Item/Item"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import {mFetch} from "../../utils/mFetch"
import ItemList from "../ItemList/ItemList"


const ItemDetailContainer=()=>{
    const {pid}=useParams()
    const [products, setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        mFetch(pid)
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(()=> setIsLoading(false))
    }, [])

    console.log(pid)
    return (
        <div>
            {isLoading ? 
                <h2>Cargando...</h2>
            :
                <>
                    <ItemDetail products={products} />
                </>
            }            
        </div>
    )
  
}
export default ItemDetailContainer
