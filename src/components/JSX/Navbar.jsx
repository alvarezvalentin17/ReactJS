import CartWidget from "./CartWidget";
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
    return(
        <>
      
   
            <header>
                <nav>
                    <ul id="menu">
                    <li><Link to='/'>Inicio</Link></li>
                    <li><a>Categorias</a>
                        <ul>
                        <li><Link to='/category/Apple'>Apple</Link></li>
                        <li><Link to='/category/Samsung'>Samsung</Link></li>
                        </ul>  
                    </li>
                    <li><Link to='/'>Contacto</Link></li>
                    <li>
                    <CartWidget/>
                    </li>
                    </ul>
                </nav>
            </header>

        </>
        
    )
}

export default Navbar;