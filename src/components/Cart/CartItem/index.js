import { memo,useContext} from 'react'
import Imagen from '../../Imagen'
import {CartContext} from '../../../context/CartContext'

function CartItem({ item }) {

  console.log('>>> render CartItem!');
  const {removeProduct}=useContext(CartContext)
  return (
    <tr>
      <th scope="row"></th>
      <td><Imagen src={item.item.img} tam='md' ubi='mx-auto d-block'/></td>
      <td  className="text-center fs-4">{item.item.nombre}</td>
      <td  className="text-center fs-4">{item.quantity}</td>
      <td  className="text-center fs-4">{item.item.precio}</td>
      <td  className="text-center fs-4">{item.item.precio*item.quantity}</td>
      <td><button onClick={()=>{removeProduct(item.item)}} className="bi bi-dash-circle-fill  bg-transparent border border-light text-center"></button></td>
    </tr>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;