import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

function CartWidget() {
  return (
    <IconButton sx={{ color: '#484848' }}>
      <Badge badgeContent='0' color="success" >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartWidget

         