import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api/ItemApi";
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
        <ItemDetail item={item}></ItemDetail>
        }
    </div>)
}