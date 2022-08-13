import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemListContainer from '../components/ItemListContainer';

export default function Outfits(){
    return(
    <div>
        <header>
            <Header/>
        </header>
        <body>
        <ItemListContainer/>
        <Footer/>
        </body>
    </div>
        
    )
}