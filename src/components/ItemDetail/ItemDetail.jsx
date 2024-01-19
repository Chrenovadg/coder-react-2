import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      
      <picture>
        <img src={img} alt={name} className='"ItemImg' />
      </picture>

      <section>
        <p className='Info'> Categoria: {category} </p>
        <p className='Info'> Description: {description} </p>
        <p className='Info'> Precio: ${price} </p>
      </section>

      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
      </footer>
    </article>
  )
}
