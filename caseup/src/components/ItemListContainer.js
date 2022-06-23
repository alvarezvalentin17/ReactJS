import './ItemListContainer.css'
import ItemCount from './ItemCount'


function ItemListContainer() {
    return (
        <>
        <h2>Bienvenido a nuestra tienda online, proximamente aqui podra encontrar justo el accesorio para su celular que esta buscando</h2>
        <ItemCount stock={10} initial={1} />

        </>
        
    )
}

export default ItemListContainer;