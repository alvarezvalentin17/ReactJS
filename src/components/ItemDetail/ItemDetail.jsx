import './ItemDetail.css'
function ItemDetail({name,price,img,stock,description}) {
    
    return (
            <div className="container1">
            <div className="card1 cardStyle1">
                <img src={img}alt={name} className='card1 card-image1' />
                <div className="card-body1">
                    <h5 className="card-title1">Nombre: {name}</h5>
                    <p className='precio1'>Descripción: {description}</p>
                    <p className='precio1'>Precio: $ {price}</p>
                    <p className='precio1'>Cantidad disponible: {stock}</p>
                    
                </div>
            </div>
            
        </div>     
    )
}

export default ItemDetail;


//
//