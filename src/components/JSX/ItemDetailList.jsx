import React from 'react'
import Item from './Item'
import ItemDetail from './ItemDetail'

export const ItemDetailList = ({ listadoProductos }) => {

  return (
    <div className='container'>
    <div className="row justify-content-evely">
      {listadoProductos.map((Producto) => <ItemDetail id={Producto.id} name={Producto.name} img={Producto.img} price={Producto.price} description={Producto.description} stock={Producto.stock} />)}
    </div>
</div>
    

  )
}

export default ItemDetailList;