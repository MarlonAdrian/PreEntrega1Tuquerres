import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import {mFetch} from "../../utils/mFetch"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer=({greeting})=>{
    const{categoria}=useParams()
    // console.log(categoria)
    const [products, setProducts]=useState([]) //si está [] envés del {} saldrá error de funcion?
    const [product, setProduct]=useState({})
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        const dbFirestore=getFirestore() //Esto conecta al firestore
        const queryCollection= collection(dbFirestore,'productos') //doc:palabra reservada            
        if (!categoria) {
            getDocs(queryCollection)
            .then( resultado=> 
                setProducts(resultado.docs.map(products=>({id:products.id, ...products.data()})))
            )
            .catch( error => console.log(error) )
            .finally(()=> setIsLoading(false)) 

        } else {
            // mFetch()
            // .then( resultado=> { 
            //     setProducts(resultado.filter(products => products.categoria === categoria ))
            // })
            // .catch( error => console.log(error) )
            // .finally(()=> setIsLoading(false))
    
            const queryCollectionFiltered=query(queryCollection, where('categoria','==',categoria))
            
            getDocs(queryCollectionFiltered)
                .then( resultado=> 
                    setProducts(resultado.docs.map(products => ({id:products.id, ...products.data()}) ))
                )            
                .catch( error => console.log(error) )
                .finally(()=> setIsLoading(false))
        }
    },[categoria])

//-----------------------------------------------------    
    return(
        <div>
            {isLoading ? 
                <h2>Cargando...</h2>
            :   
            <>
                <ItemList products={products}/> 
        </> }                     
        </div>

    )
}
export default ItemListContainer
