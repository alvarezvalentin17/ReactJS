import './Item.css'

function Item({name,price,img}) {
    
    return (
            <div className="container">
            <div className="card cardStyle">
                <img src={img}alt={name} className='card card-image' />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className='precio'>$ {price}</p>
                    <button className="btn">Ver más</button>
                </div>
            </div>
        </div>     
    )
}

export default Item;