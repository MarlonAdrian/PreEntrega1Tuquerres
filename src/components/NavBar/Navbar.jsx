import CartWidget from "../CartWidget/cartwidget"
import { Link } from "react-router-dom"

const Navbar =()=>{
  
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <h1>
        <a className="navbar-brand" href="/">
          mamOlbin-Ecommerce
        </a>
      </h1>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <Link to={'/'} className="nav-link" href='/categoria/chompas'>
            <li className="nav-item">
                Home
            </li>
          </Link>

          <Link to={'/categoria/accesorios'} className="nav-link" href=''>
            <li className="nav-item">
                Accesorios
            </li>
          </Link>

          <Link to={'/categoria/hogar'} className="nav-link" href=''>
            <li className="nav-item">
                Hogar
            </li>
          </Link>

          <Link to={'/categoria/smartphones'} className="nav-link" href=''>
            <li className="nav-item">
                Smartphones
            </li>
          </Link>          
        </ul>
        {/*------Cartwidget-----*/}
        <CartWidget/>
      </div>
    </div>
  </nav>    
    )
}
export default Navbar
