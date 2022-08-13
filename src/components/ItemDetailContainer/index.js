import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ItemApi } from "../../api/ItemApi";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer(props){

    const{id} = useParams();
    const[item,setItem]=useState({});

    useEffect(()=>{
        async function loadUserInfo(){
            const resp = await ItemApi.getItem(id);
            setItem(resp)
        }
        loadUserInfo();
    },[id])

    return  (    
    <div class="container">
        {
        <ItemDetail item={item}></ItemDetail>
        }
    </div>)
}