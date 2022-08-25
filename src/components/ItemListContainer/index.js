import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { getItems } from "../../api/ItemApi";

export default function ItemListContainer(props){

    const{category} = useParams();
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        async function loadData(){
            const resp = await getItems(category);
            setData(resp);
            setLoading(false);
        }
        loadData();
    },[category])

    return  (
    <div className="container">
        {
            loading?<h2>Cargando...</h2>:
            <ItemList data={data}/>
        }
    </div>
    )            
}