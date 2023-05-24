import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {Link, useParams} from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer=()=>{
    const {pid}=useParams()
    const [products, setProducts]=useState({})
    const [isLoading, setIsLoading]=useState(true)

//----------------------Bring Data----------------
useEffect(()=>{
    const dbFirestore=getFirestore() //Connect to firestore
    const queryDoc= doc(dbFirestore,'productos',pid)      
    getDoc(queryDoc)
        .then(resp=>{
            if (resp.exists()) {
                setProducts({id:resp.id, ... resp.data()})    
                setIsLoading(false)
            } else {
                setIsLoading(true)
            }})
        .catch(err => console.log(err))
}, [])

    return (
        <div>
            {isLoading ? 
                <center>
                    <br />
                        <h2>Producto no disponible</h2>
                    <Link to={'/'}>
                        <button className="btn btn-outline-dark">Regresar a Tienda</button>    
                    </Link>
                </center>
            :
                <ItemDetail products={products}/>
            }            
        </div>
    )
  
}
export default ItemDetailContainer
