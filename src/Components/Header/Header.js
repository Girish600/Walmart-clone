import React, { useState } from "react";
import { TbBrandWalmart } from "react-icons/tb";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { IoSearchCircle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showcart, setshowcart] = useState(false);
  const [showcart1, setshowcart1] = useState(false);
  const [showaccount, setshowaccount] = useState(false);
  return (
    <React.Fragment>
      <header className="mainheader">
        <nav className="top-header">
          <TbBrandWalmart className="icon" color="#ffc220" size={36} />
          <div className="select-bar" onClick={() => setshowcart(!showcart)}>
            <img src="./image/handcash.webp" alt="cash-hand" />
            <div>
              <h5>How do you want your items?</h5>
              <p>Sacramento, 95829</p>
            </div>
            {showcart ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          <div className="search-bar">
            <input
              type="search"
              name="search"
              placeholder="Search everything at walmart online and in store"
            />
            <IoSearchCircle color="#004F9A" size={30} />
          </div>
          <div className="reorder" onClick={() => setshowcart1(!showcart1)}>
            <CiHeart size={20} />
            <div>
              <p>Reorder</p>
              <h5>My Items</h5>
            </div>
          </div>
          <div
            className="accounts"
            onClick={() => setshowaccount(!showaccount)}
          >
            <CiUser size={20} />
            <div>
              <p>Sign in</p>
              <h5>Accounts</h5>
            </div>
          </div>
          <div className="cart">
            <BsCart4 size={22} />
            <h5>$0.00</h5>
          </div>
        </nav>
        <nav>
          <div className="second-nav">
            <div className="services">
              <ul className="service-list">
                <li>
                  <IoGridOutline size={18}/>
                  <a>Department</a>
                  <MdArrowDropDown size={18}/>
                </li>
                <li>
                  <IoGridOutline size={18}/>
                  <a>Services</a>
                  <MdArrowDropDown size={18}/>
                </li>
              </ul>
            </div>
            <div>|</div>
            <div className="features">
              <ul className="feature-list">
                <li>
                  <a>Savings</a>
                </li>
                <li>
                  <a>Grocery & Essentials</a>
                </li>
                <li>
                  <a>New & Trending</a>
                </li>
                <li>
                  <a>Halloween</a>
                </li>
                <li>
                  <a>Beauty Glow Up</a>
                </li>
                <li>
                  <a>Electronics</a>
                </li>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Fashion</a>
                </li>
                <li>
                  <a>Toy Shop</a>
                </li>
                <li>
                  <a>Registry</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {showcart && (
        <div className="cart-transperency" onClick={() => setshowcart(false)}>
          <div className="address-cart">
            <div className="showcart">
              <div className="shipping-option">
                <div className="cart">
                  <img src="./image/img1.png" alt="cash-hand" />
                  <h5>shipping</h5>
                </div>
                <div className="cart">
                  <img src="./image/img2.png" alt="cash-hand" />
                  <h5>PickUp</h5>
                </div>
                <div className="cart">
                  <img src="./image/img3.png" alt="cash-hand" />
                  <h5>Delivery</h5>
                </div>
              </div>
            </div>
            <div className="address">
              <div className="add-address">
                <CiLocationOn size={25} />
                <div className="add">
                  <h6>Add an address for shipping and delivery</h6>
                  <p>Sacramento, 95829</p>
                </div>
              </div>
              <button>Add Address</button>
            </div>
            <div className="select-store">
              <div className="store">
                <IoStorefrontOutline size={20} />
                <div className="add">
                  <h6>Sacramento Supercenter</h6>
                  <p>8195 Gerber Road,Sacramento, CA 95829</p>
                </div>
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
      {showcart1 && (
        <div className="cart-transperency" onClick={() => setshowcart1(false)}>
          <div className="order">
            <ul>
              <li>
                <a>
                  <IoDownloadOutline />
                  Reorder
                </a>
              </li>
              <li>
                <a>
                  <CiHeart />
                  List
                </a>
              </li>
              <li>
                <a>
                  <CiGift />
                  Registeries
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showaccount && (
        <div
          className="cart-transperency"
          onClick={() => setshowaccount(false)}
        >
          <div className="accounts-dropdown">
            <div className="btn">
              <Link to='/Login'><button>Sign in or create account</button></Link>
            </div>
            <hr />
            <div className="list">
              <ul>
                <li>
                  <a href="#">
                    <IoDownloadOutline size={20}/>
                    Purchase History
                  </a>
                </li>
                <li>
                  <a href="#">
                    <CiHeart size={20}/>
                    walmart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Header;
