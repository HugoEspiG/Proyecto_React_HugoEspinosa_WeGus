import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemListContainer from '../components/ItemListContainer';
import Imagen from '../components/Imagen';


export default function Home(){
  
  return(
    <div>    
        <header>
          <Header/>
        </header>
        <div className="row g-0">
          <div className="col-sm-6 col-md-8">
            <Imagen src={""} tam='md' ubi='mx-auto d-block'></Imagen>
          </div>
          <div className="col-6 col-md-4">Lorem Ipsum</div>
        </div>
        <Footer/>  
    </div>    
    )
}