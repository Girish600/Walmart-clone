import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaRegStar } from "react-icons/fa";
import { IoRefreshCircleSharp } from "react-icons/io5";
import "./SingleProduct.css";

function SingleProduct() {
  const responsive = {
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
  const product = [
    {
      id: 1,
      image: "/image/product_img/pro1.jpeg",
    },
    {
      id: 2,
      image: "/image/product_img/pro2.jpeg",
    },
    {
      id: 3,
      image: "/image/product_img/pro3.jpeg",
    },
    {
      id: 4,
      image: "/image/product_img/pro4.jpeg",
    },
    {
      id: 5,
      image: "/image/product_img/pro5.jpeg",
    },
    {
      id: 6,
      image: "/image/product_img/pro6.jpeg",
    },
  ];
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <main className="product-container">
        <section className="main-container">
          <div className="product-img">
            <div className="img">
              <img src="/image/product_img/pro2.jpeg" />
            </div>
            <div className="img">
              <img src="/image/product_img/pro3.jpeg" />
            </div>
            <div className="img">
              <img src="/image/product_img/pro4.jpeg" />
            </div>
            <div className="img">
              <img src="/image/product_img/pro5.jpeg" />
            </div>
            <div className="img">
              <img src="/image/product_img/pro6.jpeg" />
            </div>
          </div>
          <div className="product-main">
            <Carousel className="product-carousel" responsive={responsive}>
              {product.map((ele, i) => {
                return (
                  <div className="items" key={i}>
                    <Zoom>
                      <img
                        alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                        src={ele?.image}
                        width="600"
                      />
                    </Zoom>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="product-detail">
            <div className="btn">
              <button className="seller">Best Seller</button>
              <button className="clear">Clearance</button>
            </div>
            <p><a href="#">AMITOFO</a></p>
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
            <span><h1>Now $13.99</h1></span>
            <span></span>
            <button className="save">You save</button> <span>$15.00</span>
            <p>Price when purchased online</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default SingleProduct;
