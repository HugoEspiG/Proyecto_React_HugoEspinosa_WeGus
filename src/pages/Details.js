import Footer from '../components/Constructores/Footer';
import Header from '../components/Constructores/Header';
import ItemDetailContainer from '../components/Detail/ItemDetailContainer';

export default function Details(){
    return(
    <div>
        <header>
            <Header/>
        </header>
        <div>
            <ItemDetailContainer/>
        </div>
        <Footer/>
    </div>
    )
}