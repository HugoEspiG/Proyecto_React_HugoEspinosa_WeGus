// Import the functions you need from the SDKs you need
import { DB } from "./FireBaseApi";
import { collection, getDocs } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


export function getItems(category) {

    return new Promise((res, rej) => {
        const colRef = collection(DB, "Products")
        getDocs(colRef).then((snapshot) => {
            const prodConFormato = snapshot.docs.map((rawDoc) => {
                return {
                    id: rawDoc.id,
                    ...rawDoc.data()
                }
            })
            var ItemsCategory = prodConFormato
            if (category) {
                ItemsCategory = prodConFormato.filter(function (elemento) { return elemento.category === category })
            }
            res(ItemsCategory)

        }, (error) => {
            rej('Error al intentar traer los docs: ', error)
        }
        )
    }
    )
}

export function getItem(id) {
    return new Promise((res, rej) => {
        const colRef = collection(DB, "Products")
        getDocs(colRef).then((snapshot) => {
            const prodConFormato = snapshot.docs.map((rawDoc) => {
                return {
                    id: rawDoc.id,
                    ...rawDoc.data()
                }
            })
            let ItemsCategory = prodConFormato.find(elemento => elemento.id == id)
            res(ItemsCategory)

        }, (error) => {
            rej('Error al intentar traer los docs: ', error)
        }
        )
    }
    )
    // let itemDeseado=Data.find(elemento=>elemento.id==id)
    // return  itemDeseado
}

