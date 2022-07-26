import image from './Image.css';

export default function Imagen(props){
    return( <img src= {props.src} className={'rounded float-'+props.ubi+' img'+props.tam} alt={props.alt}/>);
}