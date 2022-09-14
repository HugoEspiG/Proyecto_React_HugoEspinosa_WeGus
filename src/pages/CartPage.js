import Footer from '../components/Constructores/Footer';
import Header from '../components/Constructores/Header';
import Cart from '../components/Cart';

export default function CartPage(){
    return(
        <div>
            <header>
                <Header/>
            </header>
                <div>
                    <Cart/>
                </div>
            <Footer/>
        </div>
        )
}