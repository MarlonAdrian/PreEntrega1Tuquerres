import { useState } from "react"
import Form from "./form"
import { formWithValidation } from "./formWithValidation"

//esta linea es la que va a hacer el HOC
const FormWithValidation=formWithValidation(Form)

export function Formulario (){
    const [formData,setFormData]=useState({
        name: '',
        email: ''
    })


    const handleOnChange=(evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        }) 
    } 
    return <FormWithValidation formData={formData} handleOnChange={handleOnChange}/>
}
// export default 