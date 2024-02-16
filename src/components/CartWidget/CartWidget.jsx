import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

  const { totalQuantity } = useContext(CartContext)

  return (

   <Link to='cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
    <IconButton sx={{ color: '#484848' }}>
      <Badge badgeContent={totalQuantity} color="success" >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
   </Link>

  )
}

export default CartWidget

         