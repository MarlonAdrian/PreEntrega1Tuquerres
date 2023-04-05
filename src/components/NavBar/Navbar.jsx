import CartWidget from "../CartWidget/cartwidget"


const Navbar =()=>{
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <h1>
        <a className="navbar-brand" href="#!">
          mamOlbin-Ecommerce
        </a>
      </h1>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              Category A: Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Category B: About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Category C: Contact
            </a>
          </li>
        </ul>
        {/*------Cartwidget-----*/}
        <CartWidget/>
      </div>
    </div>
  </nav>    
    )
}
export default Navbar
