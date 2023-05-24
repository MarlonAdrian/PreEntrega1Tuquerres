import { addDoc, and, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

export const CartContainer=()=>{
    // const [id,setId]=useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        checkEmail:''
    })
    const {setCartList,cartList,cleanCart}=useCartContext()

    const TotalPrice=()=>cartList.reduce((total,prod)=>total+=(prod.price*prod.cantidad),0)

    const makeOrder=(evt)=>{

        evt.preventDefault()
        console.log(TotalPrice)
        const order={}
        order.buyer=dataForm
        order.items=cartList.map(({id,title,price,cantidad})=>({id,title,price,cantidad}))
        order.total=TotalPrice()

        // document.getElementById( "elementID" )
        //Insert order
        const dbFireStore=getFirestore()
        const ordersCollection=collection(dbFireStore,'orders') //collection recibe 2 argumentos.

        if (dataForm.email==dataForm.checkEmail) {
            addDoc(ordersCollection, order)
            .then(
                response=>alert('Gracias por su compra')
                )
            .catch(err=>console.log(err))
            .finally(()=>{
                CleanCart()
            })    
        } else {
            alert('Los correos electrónicos no coinciden')
        }
        //Update Order
        // const queryDoc=doc(dbFireStore, productos,'rzhHb7H3PDA06TydInRd')
        // updateDoc(queryDoc,{
        //     stock:9 
        // }).finally(()=>console.log('updated'))

        //Borrado Lógico
        // const queryDocLog=doc(dbFireStore, orders,'rzhHb7H3PDA06TydInRd')
        // updateDoc(queryDocLog,{
        //     isActive:false
        // }).finally(()=>console.log('no show anymore')) 
        
        //batch
        // const queryDoc2=doc(dbFireStore, productos,'rzhHb7H3PDA06TydInRd')
        
        // const batch=writeBatch(dbFireStore)
        // batch.update(queryDoc2, {
        //     stock:20
        // })
        // batch.commit()
    }

    const handleOnChange = (evt)=>{
        console.log('nombre del input',evt.target.name)
        console.log('valor del input',evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }

    //Delete Order
    const deleteOrder=(pid)=>{
        setCartList(cartList.filter(prod=>prod.id!=pid))
    }
     
    //Clean Cart
    const CleanCart = () => {
        // setCartList([])
        setCartList([])
        // cartList(0)
    }    

    return(
        <div>
            {cartList.length!==0 ?
                <>
                    <div className="container">
                        {cartList.map(products=>(
                            <div key={products.id} className="col" >
                                <img className="w-25" src={products.foto} alt="imagen"/>
                                <br />
                                <label> $ {products.price}</label>
                                <br />
                                <label>Cantidad: {products.cantidad}</label>
                                <br />
                                <label>{products.description}</label>
                                <br />
                                {/* <button > X </button> */}
                                <button onClick={()=>deleteOrder(products.id)} className="btn btn-outline-dark">
                                    Eliminar del carrito
                                </button>
                            </div>
                        ))}
                        <div>
                            <br />
                            <h4> 
                                {/* $$$ TOTAL DE PRODUCTOS */}
                                Total ${cartList.reduce((total,prod)=>total+=(prod.price*prod.cantidad),0)}
                            </h4>
                        </div>
                        <button onClick={CleanCart} className="btn btn-outline-danger">Vaciar Carrito</button>
                        <center className="col">
                            <h6>
                                Listo para realizar la compra?
                            </h6>
                            <p>
                                Completa el siguiente formulario para efectivizar tu compra
                            </p>

                            <form onSubmit={makeOrder}> 
                                <input 
                                    type='text' 
                                    name="name" 
                                    onChange={handleOnChange}
                                    value={dataForm.name} 
                                    placeholder="Nombre" 
                                /> 
                                <input 
                                    type='text' 
                                    name="phone" 
                                    onChange={handleOnChange}
                                    value={dataForm.phone} 
                                    placeholder="Celular" 
                                /> 
                                <input 
                                    type='text' 
                                    name="email" 
                                    onChange={handleOnChange}
                                    value={dataForm.email} 
                                    placeholder="Correo electrónico" 
                                /> 

                                <input 
                                    type='text' 
                                    name="checkEmail" 
                                    onChange={handleOnChange}
                                    value={dataForm.checkEmail} 
                                    placeholder="Ingrese nuevamente su electrónico" 
                                />                                 
                            <br /><br />
                            <button className="btn btn-outline-success">Generar orden</button>
                                
                            </form>
                            <br />
                        </center>
                    </div>  
                </>
            :
            <center>
                <br />
                <br />
                <h5>
                    No existen productos en el carrito
                </h5>
                <br />
                <Link to={`/`}>
                            <button className="btn btn-outline-dark">Regresar a Tienda</button>    
                </Link>
            </center>
            }
        </div>
    )
}