import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemApi } from "../../api/ItemApi";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer(props){

    const{id} = useParams();

    useEffect(()=>{
        async function loadUserInfo(){
            const resp = await ItemApi.getItem(id);
            console.log(resp.item.id)
        }
        loadUserInfo();
    },[id]) 
    // return  (
    
    // <div class="container">

    //     {
    //     loading ? <h2>Cargando...</h2>:
    //     <ItemDetail item={Item}></ItemDetail>
    //     }
    // </div>
    return(<div></div>)            
}