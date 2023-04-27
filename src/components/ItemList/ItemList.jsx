import Item from "../Item/Item"
import { memo } from "react"

const ItemList=memo(({products})=>{
    return(
        <div style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
        {/* <Item /> */}
        {products.map( ({id ,foto, title, price, categoria}) =>  (
                            
                                    <Item
                                        id={id}
                                        foto={foto} 
                                        name={title} 
                                        price={price}
                                        categoria={categoria}
                                    />)
                        )}
        </div>
    )
}
)
export default ItemList