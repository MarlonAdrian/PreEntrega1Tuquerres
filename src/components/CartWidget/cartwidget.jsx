

const CartWidget=()=>{
    return(
        
    <form className="d-flex">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
          rel="stylesheet"/>
        <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1" />
                Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
                3
            </span>
        </button>
    </form>
    )    
}
export default CartWidget
