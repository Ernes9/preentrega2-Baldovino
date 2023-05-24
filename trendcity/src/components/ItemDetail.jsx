import { ItemCount } from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="product-card">
            <div className="product-image">
                <img src={item.foto} alt={item.titulo}/>
            </div>
            <div className="product-details">
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <p>Categoría: {item.categoria}</p>
                <p>Precio: ${item.precio_usd}</p>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail;