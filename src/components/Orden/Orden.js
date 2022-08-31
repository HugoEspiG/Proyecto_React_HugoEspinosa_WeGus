import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { doc, setDoc, collection, updateDoc, increment, serverTimestamp } from "firebase/firestore";
import { DB } from "../../api/FireBaseApi"

export default function Orden(props) {

    const {cartData,clearCart} =useContext(CartContext)
    const createOrder = () => {
        const itemsForDB = cartData.map(item => ({
            id: item.item.item.id,
            nombre: item.item.item.nombre,
            precio: item.item.item.precio,
            cantidad: item.item.quantity
        }));
        console.log(itemsForDB)
        let order = {
            buyer: {
                name: "Leo Messi",
                email: "leo@messi.com",
                phone: "123456789"
            },
            total: props.totalPrecio,
            items: itemsForDB,
            date: serverTimestamp()
        };


        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(DB, "Orders"));
            console.log(order)
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then((result) => {
                alert("tu orden ha sido creada con el id" + result.id);
                cartData.forEach(async (item) => {
                    const itemRef = doc(DB, "Products", item.item.item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.item.quantity),
                    });
                });
                clearCart()
            })
            .catch((err) => console.log("error" + err));


    }
    return (
        <div align="center">
            <button onClick={createOrder} className="btn btn-dark" type="submit">Procede al pago</button>
        </div>
    )
}