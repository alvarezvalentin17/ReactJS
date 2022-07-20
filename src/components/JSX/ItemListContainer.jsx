import { listadoProductos } from '../data';
import { useEffect, useState } from 'react';
import ItemList from '../JSX/ItemList';
import {useParams} from 'react-router-dom'
import Cart from '../JSX/Cart'

function ItemListContainer({gretting}) {
    
        const [productos, setProductos] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const {idcategoria} =useParams();

        const getProductos = () => {
            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const myData = idcategoria ? listadoProductos.filter((item)=>item.category === idcategoria) : listadoProductos;

                    resolve(myData)
                  
                }, 1000);
            })
        }
        

        useEffect(() => {

            getProductos()
                .then(res => setProductos(res))
                .catch(console.log)
                .finally(()=> setIsLoading(false))
        }, [idcategoria])

    return (
        isLoading ? <h1>Cargando...</h1> : (
            <>
            <h2>{gretting}</h2>
            <h2>Bienvenido a <span>CaseUp</span>! La mejor tienda online de venta de protectores para iPhone.</h2>
            <h3>Catologo</h3>
            <ItemList listadoProductos={productos}/>
            </>
        )

    )
}

export default ItemListContainer;