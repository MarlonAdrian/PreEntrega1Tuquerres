
import { useState } from "react";

const ItemCount=({onAdd})=>{
    const [counter, setCounter ]=useState(1);//Este produce un nuevo render
    //increase counter
    const increase = () => {
        if(counter<5){
            // setCounter(counter => counter + 1);      
            setCounter(counter + 1);      
        }
    };
    //decrease counter
    const decrease = () => {
        if (counter>1){
            // setCounter(counter => counter - 1);
            setCounter(counter - 1);
        }else{
            console.log('error')
        }
    };
    const reset = () =>{
        setCounter(1)
      }    

    return(
        <>
            <div 
                style={{
                    textAlign:'start',
                    paddingInline:'150px',
                    color:'white'
                }}            
            >
                <button onClick={decrease} className="btn btn-outline-light">
                    -
                </button> 
                    <h5>Cantidad: {counter}</h5> 
                <button onClick={increase} className="btn btn-outline-light">
                    +
                </button> 
            </div>
            <div  >
                <button onClick={()=>{onAdd(counter)}} className="btn btn-outline-light">
                   <h6>Agregar al Carrito</h6> 
                </button>
            </div>
        </>
    )
}
export default ItemCount


