import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./NavBar.css";

 
 function NavBar(){   
    
    return  <nav class="navbar navbar-dark bg-dark marginDis">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">WeGus</a>
                    <CartWidget></CartWidget>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink to="/" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Home</NavLink>
                            <NavLink to="/Outfits" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Features</NavLink>
                            <NavLink to="/About-us" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">About us</NavLink>
                        </div>
                    </div>
                </div>
            </nav>      
 }  

 export default NavBar;
