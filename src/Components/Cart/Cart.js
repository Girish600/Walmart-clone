import React, { useState } from "react";
import './Cart.css'
import { PiToggleRight } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
function Cart() {
    const [cartdata, setCartData] = useState(false)
    const [showcartdata, setShowcartData] = useState(false)
    return (
        <>

            <main className="cart-main">
                <section className="cart-wrapper">

                    <div className="cart-main-div">

                        <div className="cart-inside-div-A">
                            <div className="cart-inside-div-A-a">
                                <div className="cart-inside-div-A-a1">
                                    <h2>Cart (? items)</h2>
                                </div>
                                <div className="cart-inside-div-A-a2">
                                    <img src='./images/k2.webp'></img>
                                    <h2>Pick up and delivery options</h2>

                                    {cartdata ? <IoIosArrowUp size={20} onClick={() => setCartData(!cartdata)} /> : <IoIosArrowDown size={20} onClick={() => setCartData(!cartdata)} />}
                                </div>
                                {cartdata && <div className="cart-deliverys">
                                    <div className='box1'>
                                        <img src='/images/deliver.png' />
                                        <h5>shipping</h5>
                                        <p>Availaval for 2 of 3 items </p>

                                    </div>
                                    <div className='box2'>
                                        <img src='/images/car.png' />
                                        <h5>pickup</h5>
                                        <p>Check nearby</p>
                                    </div>
                                    <div className='box3'>
                                        <img src='/images/delivery.png' />
                                        <h5>delivery</h5>
                                        <p>not available</p>
                                    </div>
                                </div>}
                            </div><div className="cart-item">
                                <div className="cart-inside-div-A-b">

                                    <div className="cart-inside-div-A-b1">
                                        <img src='/images/deliver.png'></img>
                                        <h2>Shipping, arrives by Tue, Oct 1</h2>
                                    </div>
                                    <div className="cart-inside-div-A-b2">
                                        <h1>Content Here!</h1>
                                    </div>
                                </div>

                                <div className="cart-item-details">
                                    <div className="cart-items1">
                                        <div className="count-items">
                                            <h2>0</h2>
                                            <h2>items</h2>
                                        </div>


                                        {showcartdata ? <IoIosArrowUp size={20} onClick={() => setShowcartData(!showcartdata)} /> : <IoIosArrowDown size={20} onClick={() => setShowcartData(!showcartdata)} />}
                                    </div>
                                    {showcartdata && <div className="main-cart-item">
                                    <hr style={{margin:'10px'}}/>
                                    <div className="walmart-hadding">
                                        <p>Sold and shipped by </p>
                                        <h5>Walmart</h5>
                                    </div>
                                    <div className="seller">
                                       <button>Best seller</button>
                                    </div>
                                    <div className="cart-photo">
                                        <div className="items-details">
                                            <div className="photos">
                                                <img src='/images/deliver.png' alt="" />
                                            </div>
                                            <div className="discriptions">
                                                <h4>Hello Hobby Foil Confetti, 12-pack</h4>
                                                <p>$1.93/es</p>
                                                <div className="free">
                                                    <p>
                                                        Free Holiday returns until Jan 31
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="money">
                                            <h3>$43.3</h3>
                                        </div>


                                    </div>
                                    <div className="remove-cart">
                                        <p>Remove</p>
                                        <p>Save for later</p>
                                        <div className="counts-items1">
                                        <FaPlus/>
                                            <p>1</p>
                                            <FaMinus/>
                                        </div>
                                    </div>
                                </div>}
                                    <div className="item-image">
                                        <img src='/images/deliver.png' alt="" />
                                        <img src='/images/deliver.png' alt="" />
                                    </div>
                                </div>
                               
                              
                            </div>
                        </div>

                        <div className="cart-inside-div-B">
                            <div className="cart-inside-div-B-a">
                                <div className="cart-inside-div-B-a1">
                                    <button>Continue to checkout</button>
                                </div>
                                <div className="cart-inside-div-B-a2">
                                    <p>For the best shopping experience, sign in</p>
                                </div>
                                <div className="cart-inside-div-B-a3">
                                    <h2>Subtotal Here!</h2>
                                </div>
                            </div>
                            <div className="cart-inside-div-B-b">
                                <div className="cart-inside-div-B-b1">
                                    <div><img src="./images/singleproduct1.svg"></img></div>
                                    <div><p>Get free shipping & skip the $6.99 shipping!</p></div>
                                </div>
                                <div className="cart-inside-div-B-b2">
                                    <div><input type="checkbox"></input></div>
                                    <div><p>Try Walmart+ free for 30 days</p></div>
                                </div>
                            </div>
                            <div className="cart-inside-div-B-c">
                                <div><input type="checkbox"></input></div>
                                <div><p>This order is a gift.</p></div>
                                <div><img src="./images/gifat.svg"></img></div>
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </>
    )
}

export default Cart