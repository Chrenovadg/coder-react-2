import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito :0</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <h3>Total: ${total}</h3>
            <button onClick={clearCart} className='Button'>Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    );
};
