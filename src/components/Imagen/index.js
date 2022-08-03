import'./Image.css';

export default function Imagen(props){
    return( <img src= {props.src} className={'rounded '+props.ubi+' img'+props.tam+' alineacion'} alt={props.alt}/>);
}