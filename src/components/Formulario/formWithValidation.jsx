import { useState } from "react"

export const formWithValidation=(WrappedComponent)=>{



//este es el componente nuevo 7-29, con 2 funcionalidades,
//validateForm, y el manejo de errores.
//Esto llevará consigo la modificación de 2 nuevas funcionalidades
//en el Form.jsx (erros y validateForm)
//mejorando componente, creando 1ero un nuevo componente
    const FormWithValidation =(props)=>{
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}
            let isValid = true
    
            if (!props.formData.name) {
                newErrors.name = 'El campo name es obligatorio'
                isValid= false
            }
            if (!props.formData.email) {
                newErrors.email = 'El campo email es obligatorio'
                isValid= false
            }
            setErrors(newErrors)
            return isValid
        }
        
        return <WrappedComponent//retorna un componente
            {...props} //pasarle las props que ya se tienen
            errors = {errors}
            validateForm={validateForm}
            />
    }
    return FormWithValidation
}