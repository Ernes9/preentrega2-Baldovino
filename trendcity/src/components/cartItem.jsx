import cart from "../assets/cart.png"

export function CartItem(){
    return(
        <div className="cartItem">
            <img src={cart} alt="Carrito icono" />
            0
        </div>
    )
}