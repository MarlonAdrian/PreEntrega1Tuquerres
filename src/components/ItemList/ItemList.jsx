import Filter from "../Filter/Filter"
import Item from "../Item/Item"
import { memo } from "react"
import { useEffect, useState } from "react"

const ItemList=memo(({products})=>{

    const handleProductFiltered = ({ filterState, handleFilterChange }) => (
        <center>
            <br/> 
            <input type="text" value={filterState}onChange={handleFilterChange}/>
            { 
                    <>
                    {filterState == '' 
                        ?products.map( ({id ,foto, title, price, categoria}) =>  
                        <div key={id}>
                                <Item
                                    id={id}
                                    foto={foto} 
                                    title={title} 
                                    price={price}
                                    categoria={categoria}
                                />
                        </div>
                        )
                        : 
                        products.filter( producto => producto.title.toLowerCase().includes(filterState.toLowerCase()) ).map( ({id, foto, title, price, categoria}) =>
                        <div key={id} >
                                <Item
                                    id={id}
                                    foto={foto} 
                                    title={title} 
                                    price={price}
                                    categoria={categoria}
                                />
                        </div>  
                        )
                    } 
                </>
            }  
        </center>
)
    return(
        <div  style={{
            display: 'grid',
            background:'none',
        }}>
            <Filter >
                { handleProductFiltered }
            </Filter>
        </div>
    )
}
)
export default ItemList