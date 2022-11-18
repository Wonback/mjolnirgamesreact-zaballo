import React from 'react'
import {GiThorHammer} from "react-icons/gi"
import CartWidget from './CartWidget';

function NavBar() {
  return (
   <header>
    <h3>Mjölnir Games <GiThorHammer></GiThorHammer></h3>
    <nav>
        <a href="">Home</a>
        <a href="">Action</a>
        <a href="">Adventure</a>
        <a href="">Roguelike</a>
    </nav>
    <button><CartWidget></CartWidget> 69</button>
   </header>
  );
}

export default NavBar;