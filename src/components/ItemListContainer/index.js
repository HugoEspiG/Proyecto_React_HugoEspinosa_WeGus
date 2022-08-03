import { useEffect, useState } from "react";
import Data from "../Data/Index";
import ItemList from "../ItemList";


export default function ItemListContainer(props){

    const getFetch = new Promise((res,rej)=>{
        let condition = true
        if(Data){
            setTimeout(()=>{res(Data)},2000);
        } else{
            rej(console.log("No hay datos"))
        }
    })
    
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true) 

    useEffect(()=>{
        getFetch.then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    },[])

    return  (
    <div class="container">
        {
        loading ? <h2>Cargando...</h2>:
        <ItemList data={data}></ItemList>
        }
    </div>
    )            
}