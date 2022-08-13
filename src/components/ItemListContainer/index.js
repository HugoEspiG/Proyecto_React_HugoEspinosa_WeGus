import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data/Index";
import ItemList from "../ItemList";
import { ItemApi } from "../../api/ItemApi";

export default function ItemListContainer(props){

    const{category} = useParams();
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true)

    
    useEffect(()=>{
        async function loadData(){
            const resp = await ItemApi.getItems(category);
            setData(resp);
            setLoading(false);
        }
        setTimeout(()=>{loadData()},2000)
        // loadData();
    },[category])

    return  (
    <div class="container">
        {
            loading?<h2>Cargando...</h2>:
            <ItemList data={data}/>
        }
    </div>
    )            
}