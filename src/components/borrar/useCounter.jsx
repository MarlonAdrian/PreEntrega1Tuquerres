import { useState } from "react"

export const useCounter = (inital = 0, min, max) => { // custom hook
    const [ counter, setCounter ] = useState(inital)

    // console.log(renderCount)
    let handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)        
            
        }        
    }

    let handleRestar = () => {        
        if (counter > min) { // 1>1
            setCounter(counter - 1)            
        }        
    }

    return {counter, handleSumar, handleRestar }

}