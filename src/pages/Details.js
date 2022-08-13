import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemDetailContainer from '../components/ItemDetailContainer';

export default function Details(){
    return(
    <div>
        <header>
            <Header/>
        </header>
        <body>
        <div>
            <ItemDetailContainer/>
        </div>
        <Footer/>
        </body>
    </div>
    )
}