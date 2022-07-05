import React from 'react'
// import Item from '../Item/Item';
import ItemDetail from '../ItemDetail/ItemDetail';

export const ItemDetailList = ({ listadoProductos }) => {

    console.log('listadoProductosList', listadoProductos)

  return (
    <div className='container'>
    <div className="row justify-content-evely">
      {listadoProductos.map((unProducto) => <ItemDetail key={unProducto.id} name={unProducto.name} img={unProducto.img} price={unProducto.price} description={unProducto.description} stock={unProducto.stock} />)}
    </div>
</div>
    

  )
}

export default ItemDetailList;