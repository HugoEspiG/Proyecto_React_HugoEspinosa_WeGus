import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer(props){

    const getItem = new Promise((res,rej)=>{
        if(props.item){
            setTimeout(()=>{res(props.item)},2000);
        } else{
            rej(console.log("No hay datos"))
        }
    })
    
    const[Item,setItem]=useState([])
    const[loading,setLoading]=useState(true) 

    useEffect(()=>{
        getItem.then((resp)=>setItem(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return  (
    
    <div class="container">

        {
        loading ? <h2>Cargando...</h2>:
        <ItemDetail item={Item}></ItemDetail>
        }
    </div>
    )            
}