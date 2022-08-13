import Data from "../components/Data/Index";

export class ItemApi{

static getItems(category){
    var ItemsCategory    
    if(category){
        ItemsCategory = Data.filter(function(elemento){return elemento.category===category})
    }else{
        ItemsCategory=Data
    }
    console.log(ItemsCategory)
    return ItemsCategory
}

static getItem(id){
    let itemDeseado=Data.find(elemento=>elemento.id==id)
    return  itemDeseado
}
}