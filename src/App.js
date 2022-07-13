import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/JSX/Navbar';
import ItemListContainer from './components/JSX/ItemListContainer';
import ItemDetailContainer from './components/JSX/ItemDetailContainer';
// import {CartProvider} from './components/JSX/CartContext'



function App() {

  return (   
    // <CartProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route exact path='/' element={<ItemListContainer />}/>
              <Route exact path='/category/:idcategoria' element={<ItemListContainer />}/>
              <Route exact path='/item/:iditem' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
    // </CartProvider>  
    
    );
}

export default App;
