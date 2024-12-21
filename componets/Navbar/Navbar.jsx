import React from 'react';
import './navbar.css'; // Ensure the CSS file path is correct

const Navbar = () => {
  return (
    <div>

      <div className="Navbarlogo">
        <img src="/assets/logo.png" alt="" />
        <p>delivery to pincode</p>
        <input type="search" placeholder='Search Amazon.in' />
        <select id='Language'>
          <option value="" disabled selected>Language</option>
          <option value="option1">Eng(US)</option>
          <option value="option2">Eng(India)</option>
        </select>
        <select id="User-Account">
          <option value="Account">Your Account</option>
          <option value="List">Your List</option>
        </select>
        <button>Cart</button>
      </div>

      <div className="navbarmenu">
        <button>All</button>
        <button>Fresh</button>
        <button>Mx-Player</button>
        <button>Sell</button>
        <button>Best Sellers</button>
        <button>Today's Deal</button>
        <button>Mobiles</button>
        <button>Customer Service</button>
        <button>Prime</button>
        <button>Electronics</button>
        <button>Home and Kitchen</button>
        <button>Amazon Pay</button>
      </div>
    </div>
  );
};

export default Navbar;
