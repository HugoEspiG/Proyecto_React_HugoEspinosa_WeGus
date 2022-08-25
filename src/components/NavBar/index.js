import { useContext } from "react";
import {NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartWidget from "../Cart/CartWidget";
import "./NavBar.css";

 
 function NavBar(){   
    const {cartData}=useContext(CartContext)
    return (
        <nav className="navbar navbar-dark bg-dark marginDis">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand">WeGus</NavLink>
                {(cartData.length>0)?<CartWidget/>:<p></p>}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Home</NavLink>
                    {/* <NavLink to="/Outfits" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">Features</NavLink> */}
                        <li className="nav-link">
                            <a className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                            </a>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink to="/Outfits/a7x7TpWKxI3VCzx4syQO"className="nav-link marginDrop" >Hombre</NavLink>
                                <NavLink to="/Outfits/KrwypCDW6BhfMTXS1dZl" className="nav-link marginDrop">Mujer</NavLink>
                                <NavLink to="/Outfits" className="nav-link marginDrop">Todos</NavLink>
                            </ul>
                        </li>
                        <NavLink to="/About-us" className={({isActive})=>isActive?"nav-link active":"nav-link"} aria-current="page">About us</NavLink>
                    </div>
                </div>
            </div>
        </nav>      
    )  }  
 export default NavBar;
