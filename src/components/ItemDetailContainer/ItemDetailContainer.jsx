import { listadoProductos } from '../data';
import { useEffect, useState } from 'react';
import ItemDetailList from '../ItemDetailList/ItemDetailList';


function ItemDetailContainer() {
    
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
        <h2>Detalle de los productos!</h2> 
        <ItemDetailList listadoProductos={productos}/>
        </>
    )
}

export default ItemDetailContainer;