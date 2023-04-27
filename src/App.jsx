import { Route,BrowserRouter as Router, Routes }  from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/NavBar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
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

  <Routes>
    <Route path='/' element={<ItemListContainer greeting='Welcome to my shop'/>}
      />        
      <Route path='/detail/:pid' element={<ItemDetailContainer/>}
      />
      <Route path='/categoria/:categoria' element={<ItemListContainer/>}
      />
  </Routes>  
</Router>
  )
}

export default App
