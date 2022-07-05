import './ItemListContainer.css'
import { listadoProductos } from '../data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailList from '../ItemDetailList/ItemDetailList';


function ItemListContainer() {
    
        const [productos, setProductos] = useState([])

        const getProductos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    listadoProductos.length > 0 ? resolve(listadoProductos):reject("No hay datos")
                }, 2000);
            })
        }
        

        useEffect(() => {

            getProductos()
                .then(res => setProductos(res))
                .catch(console.log)
        }, [productos])

    return (
        <>
        <h2>Bienvenido a <span>CaseUp</span>! La mejor tienda online de venta de protectores para iPhone.</h2>
        <h3>Catologo</h3>
        <ItemList listadoProductos={productos}/>
        </>
    )
}

export default ItemListContainer;