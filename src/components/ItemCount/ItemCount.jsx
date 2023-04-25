import { useEffect, useRef } from "react";
import { useState } from "react";

const ItemCount=()=>{

    const [counter, setCounter ]=useState(1);//Este produce un nuevo render

    useEffect(()=>{
        console.log('Contador', counter)
    },[counter])


    //increase counter
    const increase = () => {
        if(counter<5){
            setCounter(counter => counter + 1);      
        }
    };
   
    //decrease counter
    const decrease = () => {
        if (counter>1){
            setCounter(counter => counter - 1);
        }else{
            console.log('error')
        }
    };

    const reset = () =>{
        setCounter(1)
      }    

    return(
        <div>
            <button onClick={increase}>
            +1
            </button>  
            <p>Amount: {counter}</p>

            <button onClick={decrease}>
            -1
            </button> 
             
            <button onClick={reset}>
            Reset
            </button>              
        </div>
    )
}
export default ItemCount


