import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { FaRegStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoRefreshCircleSharp } from "react-icons/io5";
import "./SingleProduct.css";

function SingleProduct() {
  const { state } = useLocation();
  let responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  let [product, setproduct] = useState(state.itemImage);
  function update(id) {
    const data = product.map((ele) => {
      if (id == ele.id) {
        return {
          ...ele,
          isActive: true,
          value: 1,
        };
      } else {
        return {
          ...ele,
          isActive: false,
          value: 0,
        };
      }
    });
    setproduct(data);
  }
  console.log("product", product);
  // const navigate = useNavigate();

  console.log(state);
  return (
    <>
      <main className="product-container">
        <section className="main-container">
          <div className="main-contain01">
            <div className="main-container1">
              <div className="product-img">
                {product?.map((ele) => {
                  return (
                    <div className="img" onClick={() => update(ele?.id)}>
                      <img
                        src={ele?.image}
                        style={{ border: ele.isActive && "2px solid blue" }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="product-main">
                <Carousel
                  className="product-carousel"
                  responsive={responsive}
                  swipeable={true}
                >
                  {JSON.parse(JSON.stringify(product))
                    .sort((a, b) => b.value - a.value)
                    ?.map((ele, i) => {
                      return (
                        <div className="items" id={`${ele.id}`}>
                          <InnerImageZoom
                            zoomType="hover"
                            zoomScale="1.4"
                            src={ele.image}
                          />
                        </div>
                      );
                    })}
                </Carousel>
              </div>
            </div>
            <div className="product-main1">
              <h2>About this item</h2>
              <hr className="hrCustom" />
              <h5>Product Details</h5>
              <h6>
                You’ll stay comfortable all day in a Hanes Signature Women’s
                Cooling Comfort Wireless Convertible T-Shirt Bra (Style W507).
                Powered by Cool That Adapts To You fabric, this bra lifts
                moisture from your skin, keeping you cool and comfortable.
                ComfortFlex Fit technology is supported by a wireless underband.
                Soft foam cups that offer smooth shaping make it a perfect
                choice for a t-shirt bra, all while still providing the full
                coverage you want. Convertible two-way straps, sporty mesh
                inserts, and stretch hook and eye closures are just a few of the
                other features you will love. Know what’s even better? Hanes
                Signature bras are available in extended sizes so you can always
                find your fit.
              </h6>
              <ul>
                <li>
                  Lightly-lined cups offer the support you need, minus the
                  wires.
                </li>
                <li>ComfortFlex Fit bras offer move-with-you comfort.</li>
                <li>
                  Moisture-wicking technology lifts sweat from your skin,
                  keeping you cooler and comfortable all day long.
                </li>
                <li>Mesh accents around the cups add a sporty touch.</li>
                <li>
                  This comfortable women’s bra offers the full coverage you want
                  and need.
                </li>
                <li>
                  Convertible straps allow you to wear two ways (traditional and
                  crisscross).
                </li>
                <li>
                  Hanes Signature t-shirt bras are available in extended sizes
                  so you’re sure to find your fit.
                </li>
                <li>
                  Hanes recommends machine washing this women’s bra in cold
                  water.
                </li>
              </ul>
              <p>
                <b>
                  <IoIosInformationCircleOutline />
                  We aim to show you accurate product information.
                </b>
                Manufacturers, suppliers and others provide what you see here,
                and we have not verified it.<a href="#">See our disclaimer</a>
              </p>
              <hr className="hrCustom" />
              <h5>Specification</h5>
              <div className="feature">
                <h4>Features</h4>
                <p>Shaping, Cooling, Full Coverage, Moisture Wicking</p>
              </div>
              <div className="feature">
                <h4>Country of Origin - Textiles</h4>
                <p>Imported</p>
              </div>
              <div className="feature">
                <h4>Clothing Size</h4>
                <p>3X</p>
              </div>
              <div className="feature">
                <h4>Fabric Content</h4>
                <p>50% Nylon, 37% Polyester, 13% Spandex</p>
              </div>
              <hr className="hrCustom" />
              <h5>Directions</h5>
              <div className="feature">
                <h4>Fabric Care Instructions</h4>
                <p>Hand wash cold water, with like colors. Do not use fabric softener. Do not bleach. Line Dry. Do not iron.</p>
              </div>
            </div>
          </div>
          <div className="product-detail">
            <div className="btn">
              <button className="seller">Best Seller</button>
              <button className="clear">Clearance</button>
            </div>
            <p>
              <a href="#">AMITOFO</a>
            </p>
            <h3>
              AMITOFO 4 Pairs Non Slip Grip Socks - Ideal for Yoga, Pilates,
              Hospital Use - Men & Women's Crew Sticky Gripper Socks (Size 7-10)
            </h3>
            <div className="ratings">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <a href="#">98 reviews</a>
            </div>
            <div className="return">
              <IoRefreshCircleSharp />
              <p>Free 90-day returns</p>
            </div>
            <div className="price">
              <span>
                <h1>${state.price}</h1>
              </span>
              <span></span>
              <button className="save">You save</button> <span>$15.00</span>
              <p>Price when purchased online</p>
              <button className="cart">Add to Cart</button>
            </div>
            <div className="size">
              <p>
                <b>Color:</b>Grey 10 Pairs
              </p>
              <div className="image">
                <div className="size-img">
                  <img src="/image/size/size1.webp"></img>
                  <span className=" price">$10.00</span>
                </div>
                <div className="size-img">
                  <img src="/image/size/size1.webp"></img>
                  <span className=" price">$10.00</span>
                </div>
                <div className="size-img">
                  <img src="/image/size/size1.webp"></img>
                  <span className=" price">$10.00</span>
                </div>
              </div>
              <div className="size-chart">
                <p>
                  <b>Clothing Size:</b>Shoe Size 6-12
                </p>
                <a href="#">Size guide</a>
              </div>
              <button>Shoe Size 6-12</button>
            </div>
            <div className="shipping">
              <h5>How do you want your item ?</h5>
              <div className="check">
                <input type="checkbox" />
                <label>I want shipping & delivery savings with Walmart +</label>
              </div>
              <p>You get 30 days free! Choose a plan at checkout.</p>
              <div className="checkouts">
                <div className="options">
                  <img src="/image/img1.png" />
                  <h5>shipping</h5>
                </div>
                <div className="options">
                  <img src="/image/img2.png" />
                  <h5>Pickup</h5>
                </div>
                <div className="options">
                  <img src="/image/img3.png" />
                  <h5>delivery</h5>
                </div>
              </div>
              <div className="location">
                <p>Is this the right location?</p>
                <IoCloseOutline />
              </div>
              <div className="address">
                <p>
                  Pickup from<a href="#">Change |</a>
                </p>
                <p>
                  Delivery to <a href="#">Sacramento, 95829</a>
                </p>
              </div>
              <hr className="custom" />
              <div className="detail">
                <p>
                  Sold by <b>DAC Enterprises</b>
                </p>
                <div className="seller">
                  <CiShop size={30} />
                  <div className="span">
                    {" "}
                    |<CiCircleCheck /> <p>Pro seller</p>{" "}
                    <IoIosInformationCircleOutline />
                  </div>
                </div>
                <p>Fulfilled by Walmart</p>
                <div className="rating">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <p>364 seller reviews</p>
                </div>
                <a href="#" className="info">
                  view seller information
                </a>
                <div className="return">
                  <TbTruckReturn size={30} />
                  <div className="return1">
                    <p>Free 30-day returns</p>
                    <a href="#">Details</a>
                  </div>
                </div>
              </div>
              <hr className="custom" />
              <div className="Add">
                <div className="add1">
                  <CiHeart size={30} />
                  <a href="#">Add to cart</a>
                </div>
                <hr />
                <div className="add1">
                  <CiGift size={30} />
                  <a href="#">Add to Registry</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SingleProduct;
