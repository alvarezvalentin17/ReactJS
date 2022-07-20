import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { cart, removeFromCart,getTotal,getQuantity} = useContext(CartContext)

  const [empty, setEmpty] = useState(true);


  useEffect(() => {
    if(cart.length === 0) {
        setEmpty(true)
    } else {
        setEmpty(false)
    }
  }, [cart.length]);

  if(!empty) {
    return (

            <div>
                {cart.map((e) => (
                    <div id={e.item.id}>
                        <img src={e.item.img} alt={e.item.name} />
                        <span> {e.item.name}</span>
                        <span> {e.item.price}</span>

                        <span> Cantidad: {e.quantity}</span>
                        <button onClick={() => removeFromCart(e.item.id)}>
                            
                            Eliminar 
                        </button>
                    </div>
                ))}
                <div>
                    <h4>TOTAL: $ {getTotal()}</h4>
                    <h4>Cantidad: {getQuantity()}</h4>
                    <button> 
                        Confirmar compra
                    </button>
                </div>
            </div>
            )
        } else {
            return (
                <>
                    <h2>No hay nada en el carrito aun </h2>
                    <Link to='/'><button>Ir al inicio</button></Link>
                </>
            
            )
            
        }
    }