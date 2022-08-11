import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemListContainer from '../components/ItemListContainer';

export default function Home(){
    return(
    <div>    
        <header>
          <Header/>
        </header>
        <body>
        <ItemListContainer></ItemListContainer>
        <Footer/>
        </body>    
    </div>    
    )
}