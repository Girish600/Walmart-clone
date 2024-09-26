import React from "react";
import { MdChevronRight } from "react-icons/md";
import { TbSquareArrowRight } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { RiFolderUserFill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import "./Accounts.css";

function Accounts() {
  return (
    <div className="Accounts">
      <div className="acc-01">
        <div className="acc-user">
          <div className="UserImg">
            <img src="/image/user.png" />
          </div>
          <div className="user">
            <p>Hello,</p>
            <h5>Utkarsh Sharma</h5>
          </div>
        </div>
        <div className="user-orders">
          <div className="Order">
            <TbSquareArrowRight size={30} />
            <h5>My Orders</h5>
            <MdChevronRight size={30} />
          </div>
          <hr className="hrcstm" />
          <div className="Acc-setting">
            <div className="sett">
              <FaUserAlt size={25} />
              <h5>Accounts Settings</h5>
            </div>
            <ul className="list1">
              <li>
                <a href="#">Personal Imformation</a>
              </li>
              <li>
                <a href="#">Manage Addresses</a>
              </li>
              <li>
                <a href="#">Pan Card Information</a>
              </li>
            </ul>
          </div>
          <hr className="hrcstm" />
          <div className="Acc-setting">
            <div className="sett">
              <IoMdWallet size={25} />
              <h5>Payments</h5>
            </div>
            <ul className="list1">
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Saved UPI</a>
              </li>
              <li>
                <a href="#">Saved Cards</a>
              </li>
            </ul>
          </div>
          <hr className="hrcstm" />
          <div className="Acc-setting">
            <div className="sett">
              <RiFolderUserFill size={25} />
              <h5>My Stuff</h5>
            </div>
            <ul className="list1">
              <li>
                <a href="#">My Coupons</a>
              </li>
              <li>
                <a href="#">My Review and Ratings</a>
              </li>
              <li>
                <a href="#">All Notifications</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
            </ul>
          </div>
          <hr className="hrcstm" />
          <div className="Acc-setting">
            <div className="logout">
              <FaPowerOff size={25} />
              <h5>
                <a href="#">Offline</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="acc-user2">
          <div className="user">
            <h5>Frequently Visited:</h5>
            <a href="#">Track Order</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>
      <div className="acc-02">
        <form className="personal-info">
          <div className="persnl">
            <h4>Personal Information</h4>
            <button>Edit</button>
          </div>
          <div className="inputs">
            <input type="text" placeholder="firstName" />
            <input type="text" placeholder="lastName" />
          </div>
          <div className="gender">
            <p>Your Gender</p>
            <div className="gen">
              <input type="radio" name="gender" id="female" />
              <label>Female</label>
              <input type="radio" name="gender" id="male" />
              <label>Male</label>
            </div>
          </div>
        </form>
        <form className="e-mail">
          <div className="persnl">
            <h4>Email Addresses</h4>
            <button>Edit</button>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Enter your email" />
          </div>
        </form>
        <form className="e-mail">
          <div className="persnl">
            <h4>Mobile Number</h4>
            <button>Edit</button>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Enter your email" />
          </div>
        </form>
        <h3>FAQs</h3>
        <h5>What happens when I update my email address (or mobile number)?</h5>
        <p>
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
        </p>
        <h5>
          When will my Flipkart account be updated with the new email address
          (or mobile number)?
        </h5>
        <p>
          It happens as soon as you confirm the verification code sent to your
          email (or mobile) and save the changes..
        </p>
        <h5>
          What happens to my existing Flipkart account when I update my email
          address (or mobile number)?
        </h5>
        <p>
          Updating your email address (or mobile number) doesn't invalidate your
          account. Your account remains fully functional. You'll continue seeing
          your Order history, saved information and personal details.
        </p>
        <h5>
          Does my Seller account get affected when I update my email address?
        </h5>
        <p>
          Flipkart has a 'single sign-on' policy. Any changes will reflect in
          your Seller account also.
        </p>
      </div>
    </div>
  );
}

export default Accounts;
