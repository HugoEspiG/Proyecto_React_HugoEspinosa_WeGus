import Footer from '../components/Footer';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
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