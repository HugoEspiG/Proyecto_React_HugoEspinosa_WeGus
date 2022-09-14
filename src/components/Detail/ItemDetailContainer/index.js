import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../../api/ItemApi";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer(props){

    const{id} = useParams();
    const[item,setItem]=useState({});
    
    useEffect(()=>{
        async function loadUserInfo(){
            const resp = await getItem(id);
            setItem(resp)
        }
        loadUserInfo();
    },[id])

    return  (    
    <div className="container">
        {
        (item==="No hay Items con este ID")?
        <h2>{item}</h2>
        :<ItemDetail item={item}></ItemDetail>
        }
    </div>)
}