import './ItemListContainer.css'
import { listadoProductos } from '../data';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


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
        <h2>Bienvenido a nuestra tienda online, proximamente aqui podra encontrar justo el accesorio para su celular que esta buscando</h2>
        <ItemList listadoProductos={productos}/>
        </>
    )
}

export default ItemListContainer;