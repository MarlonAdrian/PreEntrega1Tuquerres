import ItemCount from "../ItemCount/ItemCount"

const ItemDetail=({products})=>{
    console.log(false)
    return(
        <>
            <div className="col">
                <img src={products.foto} className="w-50" alt="imagen" />
                <h4>{products.title}</h4>
                <h4>Description: {products.description}</h4>
                <h5>${products.price}</h5>
                <h5>{products.categoria}</h5>
                <ItemCount/>
            </div> 
  
        </>
    )
}
export default ItemDetail