const Form =({formData,handleOnChange,errors, validateForm})=>{
    
    const handleOnSubmit=(evt)=>{
        evt.preventDefault()
        if(validateForm()){
            console.log('enviando:', formData)
        }
        }

        return(
            <section>
                <form onSubmit={handleOnSubmit}>
                    <input 
                        type="text"
                        name="name" 
                        placeholder="ingrese el nombre"
                        onChange={handleOnChange}
                        value={formData.name}
                    /><br/>
                    {errors && errors.name && <span>{errors.name}</span>}
                    <input 
                        type="text"
                        name="email" 
                        placeholder="ingrese el email"
                        onChange={handleOnChange}
                        value={formData.email}
                    /><br />
                    {errors && errors.name && <span>{errors.name}</span>}
                    <button>Enviar</button>                   
                </form>
            </section>
            
        )
    
}
export default Form