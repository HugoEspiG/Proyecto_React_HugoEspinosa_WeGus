import Footer from '../components/Footer';
import Header from '../components/Header';
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