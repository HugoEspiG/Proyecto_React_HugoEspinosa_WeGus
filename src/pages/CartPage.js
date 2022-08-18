import Footer from '../components/Footer';
import Header from '../components/Header';
import Cart from '../components/Cart';

export default function CartPage(){
    return(
        <div>
            <header>
                <Header/>
            </header>
            <body>
                <div>
                    <Cart/>
                </div>
            <Footer/>
            </body>
        </div>
        )
}