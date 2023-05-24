import Item from "./Item";
import { capitalize } from "../helpers/capitalize";

const ItemList = ({ productos, titulo }) => {
    return(
        <div className="container">
            <h2 className="main-title">{capitalize(titulo)}</h2>
            <div className="productos">
                { productos.map((prod) => <Item productos={prod} key={prod.id}/>) }
            </div>
        </div>
    )
}

export default ItemList;