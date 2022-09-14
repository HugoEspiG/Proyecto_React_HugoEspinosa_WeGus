import CheckOut from "../components/CheckOuts/CheckOut/CheckOut";
import Footer from '../components/Constructores/Footer';
import Header from '../components/Constructores/Header';

export default function CheckOutPage(){
    return(
    <div>
        <header>
            <Header/>
        </header>
        <div>
            <CheckOut/>
        </div>
        <Footer/>
    </div>
    )
}