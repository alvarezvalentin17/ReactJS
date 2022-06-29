
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
                <p>CaseUp!</p>
                <a href="#">Inicio</a>
                <a href="#">Nuestros productos</a>
                <a href="#">Sobre nosotros</a>
                <a href="#">Contactenos</a>
                <CartWidget />
        </nav>
    )
}

export default Navbar;