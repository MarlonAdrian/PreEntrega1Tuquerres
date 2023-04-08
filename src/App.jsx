import { useState } from 'react'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    {/* Navbar with a cartwidget*/}

      <Navbar/>
      {/* ItemListContainer with prop greeting*/}
      <ItemListContainer greeting='Welcome to my shop'/>      

    </>
  )
}

export default App
