import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/JSX/Navbar';
import ItemListContainer from './components/JSX/ItemListContainer';
import ItemDetailContainer from './components/JSX/ItemDetailContainer';



function App() {

  return (   
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/category/:idcategoria' element={<ItemListContainer />}/>
          <Route exact path='/item/:iditem' element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </>  
    
    );
}

export default App;
