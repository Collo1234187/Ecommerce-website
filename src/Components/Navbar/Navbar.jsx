import React, { useContext, useState } from 'react';

import './Navbar.css'
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';



import shopping_Bag from '../Assets/shoppingBag.png'
import seat_icon from '../Assets/seat-icon.png'
import cart from '../Assets/cart_icon.png'
import { ShopContext } from '../../Contexts/ShopContext';

export const Navbar = () => {
 const location = useLocation();

const getRouteKey = (path) => {
  if (path === "/") return "shop";
  if (path.includes("bed")) return "bed";
  if (path.includes("sofa")) return "sofa";
  if (path.includes("stand")) return "stand";
  if (path.includes("dining")) return "dining";
  if (path.includes("chair")) return "chair";
  if (path.includes("table")) return "table";
  if (path.includes("mattress")) return "mattress";
  if (path.includes("pillow")) return "pillow";
  return ""; 
};


const [menu, setMenu] = useState(getRouteKey(location.pathname));
const {getTotalCartItems} = useContext(ShopContext);

// Update state on route change
React.useEffect(() => {
  setMenu(getRouteKey(location.pathname));
}, [location.pathname]);

  return (
    <div v className="navbar">
       <div className="navbar-logo">
  <img src={shopping_Bag} alt="Shopping Bag" className="shopping-bag" />
  <div className="navbar-logo-content">
    <img src={seat_icon} alt="Seat Icon" className="seat-icon" />
    <div className="navbar-logo-text">
      <h1>SuperHome Interiors</h1>
      <p>For affordable furniture n services</p>
    </div>
  </div>
</div>
         <ul className="nav-menu">
  <li onClick={() => setMenu("shop")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/">shop</Link>
    {menu === "shop" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("bed")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/bed">bed</Link>
    {menu === "bed" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("sofa")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/sofa">sofa</Link>
    {menu === "sofa" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("stand")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/stand">stand</Link>
    {menu === "stand" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("dining")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/dining">dining</Link>
    {menu === "dining" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("chair")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/chair">chair</Link>
    {menu === "chair" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("table")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/table">table</Link>
    {menu === "table" ? <hr /> : null}
  </li>
   <li onClick={() => setMenu("mattress")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/mattress">mattress</Link>
    {menu === "mattress" ? <hr /> : null}
  </li>
  <li onClick={() => setMenu("pillow")}>
    <Link style={{ textDecoration: 'none',color:'inherit' }} to="/pillow">pillow</Link>
    {menu === "pillow" ? <hr /> : null}
  </li>
</ul>

<div className="nav-login-cart">
  <Link to="/login"><button>login</button></Link>
  <Link to="/cart"><img src={cart} alt="" /></Link>
  <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>


    </div>
  )
}

