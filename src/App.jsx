import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

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
