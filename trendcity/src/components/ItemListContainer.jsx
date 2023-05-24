import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { pedirDatos } from "../helpers/pedirItem";
import { useParams } from "react-router-dom";


function ItemListContainer(){
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const [titulo, setTitulo] = useState("Productos");


    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoria){
                    setProductos(res.filter((prod) => prod.categoria === categoria));
                    setTitulo(categoria);
                } else{
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
    }, [categoria]);

    return(
        <div className="itemList">
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}



export default ItemListContainer;