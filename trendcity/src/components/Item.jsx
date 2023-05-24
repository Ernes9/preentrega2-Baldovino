import { Link } from "react-router-dom";

const Item = ({ productos} ) => {
    return(
            <div className="card">
                <img src={productos.foto} alt={productos.titulo} />
                <div className="card-content">
                    <h2>{productos.titulo}</h2>
                    <p>Precio: ${productos.precio_usd}</p>
                    <p>Categoría: {productos.categoria}</p>
                    <Link to={`/item/${productos.id}`} className="button">Ver más</Link>
                </div>
            </div>
    )
}

export default Item;