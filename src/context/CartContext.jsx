import { createContext, useContext, useState } from "react";

const CartContext= createContext([])

export const useCartContext=()=>useContext(CartContext)

export const CartContextProvider=({children})=>{
    const [cartList,setCartList,deleteOrder]=useState([])

    const addToCart=(newProduct)=>{
        
        const idx=cartList.findIndex(product=>newProduct.id==product.id)
        
        if (idx==-1) {
            setCartList([
                ... cartList, //spread de lo que ya tenia
                newProduct
            ])  
        } else {
            cartList[idx].cantidad+=newProduct.cantidad//lo mismo pero reducido
            setCartList([...cartList]) //no detecta cambio, por lo que se hace un nuevo array(está forzando al render)
        }
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            setCartList,
            deleteOrder
        }}>
            {children}
        </CartContext.Provider>

    )
}
