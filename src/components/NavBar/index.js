import {NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./NavBar.css";

 
 function NavBar(){   
    
    return (
<nav class="navbar navbar-dark bg-dark marginDis">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <NavLink to="/" class="navbar-brand">WeGus</NavLink>
        <CartWidget></CartWidget>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavLink to="/" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Home</NavLink>
               {/* <NavLink to="/Outfits" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Features</NavLink> */}
                <li class="nav-link">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Categorias
                    </a>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink to="/Outfits/Ropa%20hombre"className={({isActive})=>isActive?"nav-link active":"nav-link"}>Hombre</NavLink>
                        <NavLink to="/Outfits/Ropa%20mujer" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Mujer</NavLink>
                        <NavLink to="/Outfits" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Todos</NavLink>
                    </ul>
                </li>
                <NavLink to="/About-us" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">About us</NavLink>
            </div>
        </div>
    </div>
</nav>      
    )  }  
 export default NavBar;
