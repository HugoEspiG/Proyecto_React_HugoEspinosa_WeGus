import Data from "../components/Data/Index";

export class ItemApi{
static getItem(id){
    return Data.map(function(item){
        if(item.id==id)
        return item
        else
        console.log("Item no encontrado")
    })
}
}