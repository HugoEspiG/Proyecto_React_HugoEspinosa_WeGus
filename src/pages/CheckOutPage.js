import CheckOut from "../components/CheckOut/CheckOut";
import Header from "../components/Header";
import Footer from "../components/Footer";

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