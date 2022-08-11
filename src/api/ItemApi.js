import Data from "../components/Data/Index";

export class ItemApi{

static getItem(id){
    let itemDeseado=Data.find(elemento=>elemento.id==id)
    return  itemDeseado
}
}