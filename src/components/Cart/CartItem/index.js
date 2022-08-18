import { memo,useContext} from 'react'
import Imagen from '../../Imagen'
import {CartContext} from '../../../context/CartContext'

function CartItem({ item }) {

  console.log('>>> render CartItem!');
  const {removeProduct}=useContext(CartContext)
  return (
    <tr>
      <th scope="row">{item.item.id}</th>
      <td><Imagen src={item.item.img} tam='md' ubi='mx-auto d-block'/></td>
      <td>{item.item.nombre}</td>
      <td>{item.quantity}</td>
      <td>{item.item.precio}</td>
      <td>{item.item.precio*item.quantity}</td>
      <td><button onClick={()=>{removeProduct(item.item)}} class="bi bi-dash-circle-fill  bg-transparent border border-light"> remover</button></td>
    </tr>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;