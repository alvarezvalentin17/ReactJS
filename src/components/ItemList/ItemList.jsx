import React from 'react'
import Item from '../Item/Item';

export const ItemList = ({ listadoProductos }) => {

    console.log('listadoProductosList', listadoProductos)

  return (
    <div className='container'>
    <div className="row justify-content-evely">
      {listadoProductos.map((unProducto) => <Item key={unProducto.id} name={unProducto.name} img={unProducto.img} price={unProducto.price} />)}
    </div>
</div>
    

  )
}

export default ItemList;