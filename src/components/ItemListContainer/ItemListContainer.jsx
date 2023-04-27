import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import {mFetch} from "../../utils/mFetch"

const ItemListContainer=({greeting})=>{
    const{categoria}=useParams()
    console.log(categoria)
    const [products, setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        if (!categoria) {
            mFetch()
            .then( resultado=> { 
                setProducts(resultado)
            })

            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false)) 

        } else {
            mFetch()
            .then( resultado=> { 
                setProducts(resultado.filter(products => products.categoria === categoria ))
            })
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false))

        }
    },[categoria])
    return(
        <>
            <ItemList products={products}/> 
        </> 
    )
}
export default ItemListContainer
