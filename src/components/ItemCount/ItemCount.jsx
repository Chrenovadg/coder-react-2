import { Container } from '@mui/material'
import { useState } from 'react'


export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
}

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

    return (
      <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '10vh', 
            }}
            maxWidth="sm" 
            >
                
            <div className='counter'>
                <div className="controls">
                    <button className='button btn-decrement' onClick={decrement}> - </button>
                    <h4 className='number'> {quantity} </h4>
                    <button className='button btn--increment' onClick={increment}> + </button>
                </div>
                <div>
                    <button className='button' onClick={() => onAdd(quantity)} disabled={!stock} >
                      Agregar al carrito
                    </button>
                </div>
            </div>
            
            </Container>

    )
  }
