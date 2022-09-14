import Footer from '../components/Constructores/Footer';
import Header from '../components/Constructores/Header';
import Inicio from '../components/Constructores/Inicio';
export default function Home(){

  return(
    <div>    
        <header>
          <Header/>
        </header>
        <Inicio/>
        <Footer/>  
    </div>    
    )
}