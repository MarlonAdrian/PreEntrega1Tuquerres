import { Link } from "react-router-dom"
// import { useCartContext } from "../../context/CartContext"


const CartWidget=()=>{
    // const {cantidadTotal}=useCartContext()
    return(
        
    <form className="d-flex">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"/>

        <button className="btn btn-outline-dark" type="submit">
          <Link to={'/cart'}  className="bi-cart-fill me-1" >
                {/* {cantidadTotal()} */}
                Cart
            {/* <span className="badge bg-dark text-white ms-1 rounded-pill">
                3
            </span> */}
          </Link>
        </button>
    </form>
    )    
}
export default CartWidget
