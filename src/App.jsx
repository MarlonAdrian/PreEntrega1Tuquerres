import { Navigate, Route,BrowserRouter as Router, Routes }  from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/NavBar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Formulario } from './components/Formulario/formulario';

import {mFetch} from "./utils/mFetch"
import { createContext, useState } from 'react';
import { CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
function App() {


  const [products, setProducts]=useState(mFetch);

  function saludo(){
    console.log("soy un saludo");
  }

  return (
<CartContextProvider>
  <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Navbar/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>

    <Routes >
      <Route path='/' element={<ItemListContainer greeting='Welcome to my shop'/>}/>        
      <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
      <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
      <Route path='/cart/' element={<CartContainer/>}/>
      <Route path='*' element={ <Navigate to='/' /> } />  
    </Routes>  
  </Router>
</CartContextProvider>    


  )
}

export default App
