import { Link } from "react-router-dom";
import { CartItem } from "./cartItem";

function NavBar(){

    return(
        <div className="navbar">
            <Link to="/"><h1 className="logo">Trendcity</h1></Link>
            <ul>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/productos/remeras">Remeras</Link></li>
                <li><Link to="/productos/pantalones">Pantalones</Link></li>
                <li><Link to="/productos/zapatillas">Zapatillas</Link></li>
            </ul>
            <CartItem/>
        </div>
    )
}

export default NavBar;