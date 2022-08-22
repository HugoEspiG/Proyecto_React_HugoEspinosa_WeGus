import { useContext } from "react";
import {NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartWidget from "../Cart/CartWidget";
import "./NavBar.css";

 
 function NavBar(){   
    const {cartData}=useContext(CartContext)
    return (
        <nav class="navbar navbar-dark bg-dark marginDis">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand">WeGus</NavLink>
                {(cartData.length>0)?<CartWidget/>:<p></p>}
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <NavLink to="/" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Home</NavLink>
                    {/* <NavLink to="/Outfits" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Features</NavLink> */}
                        <li class="nav-link">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                            </a>
                            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink to="/Outfits/Ropa%20hombre"className="nav-link">Hombre</NavLink>
                                <NavLink to="/Outfits/Ropa%20mujer" className="nav-link">Mujer</NavLink>
                                <NavLink to="/Outfits" className="nav-link">Todos</NavLink>
                            </ul>
                        </li>
                        <NavLink to="/About-us" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">About us</NavLink>
                    </div>
                </div>
            </div>
        </nav>      
    )  }  
 export default NavBar;
