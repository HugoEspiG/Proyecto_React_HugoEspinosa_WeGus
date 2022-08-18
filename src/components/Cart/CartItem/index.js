import React, { memo } from 'react'
import Imagen from '../../Imagen'

function CartItem({ item }) {

  console.log('>>> render CartItem!');

  return (
    <tr>
      <th scope="row">{item.item.id}</th>
      <td><Imagen src={item.item.img} tam='md' ubi='mx-auto d-block'/></td>
      <td>{item.item.nombre}</td>
      <td>{item.quantity}</td>
      <td>{item.item.precio}</td>
      <td>{item.item.precio*item.quantity}</td>
      <td></td>
    </tr>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;