import Container from "../Container";


export default function ItemListContainer(props){
    return  <div>
                <div>
                    <Container texto={props.items[0]}></Container>
                </div>
                <div>
                    <Container texto={props.items[1]}></Container>
                </div>
                <div>
                    <Container texto={props.items[2]}></Container>
                </div>
            </div>
            
}