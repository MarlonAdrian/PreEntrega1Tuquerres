import { useState } from "react"

const Filter=({children})=>{
    const [filterState,setFilterState]=useState('')
    // function capturando(e){
    //     console.log(e);
    //     // setHeight(e.clientX)
    //     // setWeight(e.clientY)
    // }
    // window.addEventListener('mousemove',capturando)
    
    const [message, setMessage] = useState('');
    // const touchingKeyDown=event=>{
    //     console.log(event.key);
    //     if( event.key=='a'||
    //         event.key=='e'||
    //         event.key=='i'||
    //         event.key=='o'||
    //         event.key=='u'){
    //             console.log('no permitido')
    //             event.preventDefault()
    //             //event.stopPropagation()
    //         }
    // }
    //esta funcion guarda lo que se ponga en el input
    const handleFilterChange=(evt)=>{
        setFilterState(evt.target.value)
    }
    return children(
        {filterState,handleFilterChange})


    // return (
    //     <div>
    //     <input
    //       type="text"
    //       id="message"
    //       name="message"
    //       value={message}
    //       onKeyDown={touchingKeyDown}
    //       onChange={event => setMessage(event.target.value)}
    //     />
    //   </div>
    // )
}
export default Filter