import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HoverVideoPlayer from "react-hover-video-player";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Data from "../Data/Data";

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const responsive3 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive4 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const responsive5 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const products=[
    {
      id:1,
      image:"/image/tshirt1.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:2,
      image:"/image/tshirt2.webp",
      price: 10.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:3,
      image:"/image/tshirt3.webp",
      price: 30.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:4,
      image:"/image/tshirt4.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:5,
      image:"/image/tshirt5.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:6,
      image:"/image/tshirt6.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:7,
      image:"/image/tshirt7.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:8,
      image:"/image/tshirt8.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:9,
      image:"/image/tshirt9.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    },
    {
      id:10,
      image:"/image/tshirt10.webp",
      price: 27.98,
      discription:"Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL",
      title:"",
      category: "",
      rating:4,
      aboutitem:[{
        item: ""
      },
    {
      item: ""
    },
    {
      item: ""
    },
    {
      item: ""
    }
  ],
  details:"",
    }
  ];
  const product2=[{
    id:1,
    image: "/image/cr3img01.webp",
    price: 10.98,
    description: "Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic Tee, Sizes XS-3XL"
  }];

  // const products = Data.product8;

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <main>
        <section className="main">
          <section className="container1">
            <div className="item1">
              <a href="#" className="link">
                <img src="/image/image01.jpg" />
                <div className="item-content">
                  <h4>
                    The Top Toy List is <br /> here
                  </h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
            <div className="item2">
              <a href="#" className="link">
                <img src="/image/image02.jpg" />
                <div className="item-content">
                  <h4>
                    Only at Walmart-- <br /> woohoo!
                  </h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
            <div className="item3">
              <a href="#" className="link">
                <img src="/image/image03.jpg" />
                <div className="item-content">
                  <h4>Big fun for ages 5–7</h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
          </section>
          <section className="container2">
            <div className="item1">
              <a href="#" className="link">
                <img src="/image/image4.jpg" alt="img" />
              </a>
            </div>
            <div className="contain-02">
              <div className="contain1">
                <img src="/image/image05.jpg" alt="img" />
                <div className="item-content">
                  <h4>Thinstant classic</h4>
                  <a href="#" className="link">
                    Preorder now
                  </a>
                </div>
              </div>
              <div className="contain2">
                <img src="/image/image06.jpg" alt="img" />
                <div className="item-content">
                  <h4>Toys & more up to 40% off</h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </div>
            </div>
            <div className="item3">
              <a href="#" className="link">
                <img src="/image/image06.webp" alt="img" />
                <div className="item-content">
                  <h4>
                    Walmart+ members save big with free delivery from stores
                  </h4>
                  <p>Terms Apply.</p>
                  <a href="#" className="link">
                    join Walmart
                  </a>
                </div>
              </a>
            </div>
          </section>
          <section className="container3">
            <div className="item1">
              <a href="#" className="link">
                <img src="/image/image8.jpg" alt="img" />
                <div className="item-content">
                  <h4>Most Wanted for ages 12+</h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
            <div className="item2">
              <a href="#" className="link">
                <img src="/image/image09.jpg" alt="img" />
                <div className="item-content">
                  <h4>Play & grow for ages 1-2</h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
            <div className="item3">
              <a href="#" className="link">
                <img src="/image/image10.jpg" alt="img" />
                <div className="item-content">
                  <h4>All smiles for ages 2-4</h4>
                  <a href="#" className="link">
                    Shop now
                  </a>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="deals">
          <div className="flashDeals">
            <div>
              <h3>Flash Deals</h3>
              <p>Up to 65% off</p>
            </div>
            <a href="#">View all</a>
          </div>
          <Carousel className="carousel01" responsive={responsive}>
            {products.map((ele,i)=>{
            return (
              <div className="items" key={i}>
              <img src={ele?.image} alt="item" />
              <div className="item-detail">
                <h4>${ele?.price}</h4>
                <p>
                  {ele?.discription}
                </p>
                <button onClick={()=>navigate("/product-details", {state:ele})}>Options</button>
              </div>
            </div>
            )
          })}
          </Carousel>
        </section>
        <hr className="customHr" />
        <section className="main03">
          <div className="Crokery">
            <div className="half-carousel">
              <div className="flashDeals">
                <div>
                  <h3>Buttery velvets & beyond</h3>
                  <p>Surround yourself in warmth.</p>
                </div>
                <a href="#">View all</a>
              </div>
              <Carousel className="carousel03" responsive={responsive1}>
              {/* {product2.map((ele,i)=>{
                return(
                  <div className="items">
                  <img src={ele?.image} alt="item" />
                  <div className="item-detail">
                    <h4>${ele?.price}</h4>
                    <p>{ele?.discription}</p>
                    <button type="submit">Add+</button>
                  </div>
                );
              })} */}
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
                <div className="items">
                  <img src="/image/cr3img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <p>
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </p>
                    <button type="submit">Add+</button>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="half-image">
            <div className="img03">
              <img src="/image/cr3img.jpg" />
            </div>
            <div className="item-content">
              <p>Fall vibes</p>
              <h1>Feels like home</h1>
              <button type="submit">Shop now</button>
            </div>
          </div>
        </section>
        <section className="main02">
          <div className="container01">
            <a href="#">
              <div className="item-content">
                <p>Pumpkins to parties</p>
                <h1>Your Halloween HQ</h1>
                <button>Shop all</button>
              </div>
              <div className="imgs">
                <img src="/image/2img01.jpg" alt="img" />
              </div>
            </a>
          </div>
          <div className="container02">
            <div className="item">
              <a href="#">
                <img src="/image/2img02.jpg" alt="img" />
                <div className="item-content">
                  <p>To-Die-For decor</p>
                  <h1>
                    Home is where <br />
                    the haunt is
                  </h1>
                  <a href="#">Shop now</a>
                </div>
              </a>
            </div>
            <div className="Items">
              <div className="contain1">
                <a href="#">
                  <img src="/image/2img03.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Be the good <br /> candy house
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
              <div className="contain2">
                <a href="#">
                  <img src="/image/2img04.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Throw a monster
                      <br />
                      mash
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container03">
            <a href="#">
              <img src="/image/2img05.jpg" alt="img" />
              <div className="item-content">
                <h1>
                  Cutest custumes on <br /> the block
                </h1>
                <a href="#">Shop now</a>
              </div>
            </a>
          </div>
        </section>
        <section className="horrorToy">
          <div className="Toys">
            <div>
              <h3>Fear not—there’s more</h3>
              <p>Something wicked this way comes.</p>
            </div>
            <a href="#">View all</a>
          </div>
          <Carousel className="carousel02" responsive={responsive}>
            <div className="items">
              <img src="/image/cr3img01.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img02.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img03.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img01.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img02.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img03.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img01.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/cr3img01.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/deal1.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
            <div className="items">
              <img src="/image/deal1.webp" alt="item" />
              <div className="item-detail">
                <h4>Now $74.99</h4>
                <span></span>
              </div>
              <div className="description">
                <a>
                  <h5>T-shirt's</h5>
                </a>
                <a href="#">
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </a>
              </div>
              <button type="submit">Options</button>
            </div>
          </Carousel>
        </section>
        <hr className="customHr" />
        <section className="main03">
          <div className="Crokery">
            <div className="half-carousel">
              <div className="flashDeals">
                <div>
                  <h3>Sliving your best life</h3>
                  <p>Cookware, mini fridges & more.</p>
                </div>
                <a href="#">View all</a>
              </div>
              <Carousel className="carousel03" responsive={responsive1}>
                <div className="items">
                  <img src="/image/cr4img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img02.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img03.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img02.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img03.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img02.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img03.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
                <div className="items">
                  <img src="/image/cr4img01.webp" alt="item" />
                  <div className="item-detail">
                    <h4>Now $74.99</h4>
                    <span></span>
                  </div>
                  <div className="description">
                    <a>
                      <h5>T-shirt's</h5>
                    </a>
                    <a href="#">
                      Dogg Supply Men's, Women's & Big Men’s Short Sleeve
                      Graphic Tee, Sizes XS-3XL
                    </a>
                  </div>
                  <button type="submit">Add+</button>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="half-image">
            <div className="img03">
              <img src="/image/cr4img.jpg" />
            </div>
            <div className="item-content">
              <p>Live,Love,Pink</p>
              <h1>Be An Icon</h1>
              <button type="submit">Shop now</button>
            </div>
          </div>
        </section>
        <section className="main05">
          <Carousel className="carousel05" responsive={responsive3}>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video01.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video02.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video03.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video04.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video01.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video02.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video03.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <HoverVideoPlayer
                  videoSrc="/videos/video04.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  videoClassName="videos"
                />
                <div className="price">
                  <h2>$7.98</h2>
                  <p>Joyspun Women's Short Sleeve Sleepshirt, Sizes S to 3X</p>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
        <hr className="customHr" />
        <section className="main04">
          <div className="Items">
            <div>
              <h3>Get it all right here</h3>
            </div>
            <a href="#">View all</a>
          </div>
          <Carousel className="carousel04" responsive={responsive2}>
            <div className="items">
              <img src="/image/item01.webp" alt="item" />
              <div className="item-detail">
                <p>Grocery</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item02.webp" alt="item" />
              <div className="item-detail">
                <p>home</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item03.webp" alt="item" />
              <div className="item-detail">
                <p>Patio & Garden</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item04.webp" alt="item" />
              <div className="item-detail">
                <p>Fashion</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item05.webp" alt="item" />
              <div className="item-detail">
                <p>Electronics</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item06.webp" alt="item" />
              <div className="item-detail">
                <p>Toys</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item07.webp" alt="item" />
              <div className="item-detail">
                <p>Beauty</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item08.webp" alt="item" />
              <div className="item-detail">
                <p>Auto & Tires</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item09.webp" alt="item" />
              <div className="item-detail">
                <p>Grocery</p>
              </div>
            </div>
            <div className="items">
              <img src="/image/item01.webp" alt="item" />
              <div className="item-detail">
                <p>Grocery</p>
              </div>
            </div>
          </Carousel>
        </section>
        <section className="main02">
          <div className="container01">
            <a href="#">
              <div className="imgs">
                <img src="/image/01img.jpg" alt="img" />
              </div>
            </a>
          </div>
          <div className="container02">
            <div className="item">
              <a href="#">
                <img src="/image/02img.jpg" alt="img" />
                <div className="item-content">
                  <h1>
                    Big Fun From <br />
                    Little Tikes
                  </h1>
                  <a href="#">Shop now</a>
                </div>
              </a>
            </div>
            <div className="Items">
              <div className="contain1">
                <a href="#">
                  <img src="/image/03img.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Play Dates Faves-
                      <br /> Only Here
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
              <div className="contain2">
                <a href="#">
                  <img src="/image/04img.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Transformers, Roll
                      <br />
                      Out
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container03">
            <a href="#">
              <img src="/image/05img.jpg" alt="img" />
              <div className="item-content">
                <p>Halloween Toys</p>
                <h1>
                  Fright night for <br /> everyone
                </h1>
                <a href="#">Shop now</a>
              </div>
            </a>
          </div>
        </section>
        <section className="main06">
          <div className="entertainment">
            <h3>Hours of entertainment</h3>
            <p>For every age & stage.</p>
          </div>
          <Carousel className="carousel06" responsive={responsive4}>
            <div className="items">
              <img src="/image/toy01.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy02.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy03.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy04.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy05.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy06.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy01.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy02.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy03.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/toy04.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
          </Carousel>
        </section>
        <hr className="customHr" />
        <section className="main07">
          <div className="socials">
            <h3>Trending on social</h3>
            <p>Shop creator faves.</p>
          </div>
          <Carousel className="carousel07" responsive={responsive5}>
            <div className="items">
              <img src="/image/social1.jpg" alt="item" />
            </div>
            <div className="items">
              <img src="/image/social2.jpg" alt="item" />
            </div>
            <div className="items">
              <img src="/image/social3.jpg" alt="item" />
            </div>
            <div className="items">
              <img src="/image/social4.jpg" alt="item" />
            </div>
            <div className="items">
              <img src="/image/social5.jpg" alt="item" />
            </div>
            <div className="items">
              <img src="/image/social6.jpg" alt="item" />
            </div>
          </Carousel>
        </section>
        <hr className="customHr"/>
        <section className="main08">
          <div className="container01">
            <a href="#">
              <div className="item-content">
                <p>Feast your eyes</p>
                <h1>Master the art of the <br/> Tablescape</h1>
                <button>Shop now</button>
              </div>
              <div className="imgs">
                <img src="/image/8img1.jpg" alt="img" />
              </div>
            </a>
          </div>
          <div className="container02">
            <div className="item">
              <a href="#">
                <img src="/image/8img2.jpg" alt="img" />
                <div className="item-content">
                  <p>TV stands</p>
                  <h1>
                    Anchor your<br />
                    Space
                  </h1>
                  <a href="#">Shop now</a>
                </div>
              </a>
            </div>
            <div className="Items">
              <div className="contain1">
                <a href="#">
                  <img src="/image/8img3.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Opt for the big<br /> Screen
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
              <div className="contain2">
                <a href="#">
                  <img src="/image/8img5.jpg" alt="img" />
                  <div className="item-content">
                    <h1>
                      Crunch-time
                      <br />
                      Applainces
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container03">
            <a href="#">
              <img src="/image/8img6.jpg" alt="img" />
              <div className="item-content">
              <p>Host happy hour</p>
                <h1>
                  Mix,mingle & pour
                </h1>
                <a href="#">Shop barware</a>
              </div>
            </a>
          </div>
        </section>
        <section className="main09">
          <div className="liqours">
            <h3>Hours of entertainment</h3>
            <p>For every age & stage.</p>
          </div>
          <Carousel className="carousel09" responsive={responsive4}>
            <div className="items">
              <img src="/image/bar1.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar2.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar3.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar4.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar5.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar6.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar7.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar8.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar9.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/bar10.png" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
          </Carousel>
        </section>
        <section className="main10">
          <div className="container01">
            <a href="#">
              <div className="item-content">
                <p>Hispanic Heritage Month</p>
                <h1>Celebrating la<br/>Comunidad</h1>
                <button>Shop now</button>
              </div>
              <div className="imgs">
                <img src="/image/10img1.webp" alt="img" />
              </div>
            </a>
          </div>
          <div className="container02">
            <div className="item">
              <a href="#">
                <img src="/image/10img2.webp" alt="img" />
                <div className="item-content">
                  <p>Let's fiesta!</p>
                  <h1>
                    Dia de los<br />
                    Muertos
                  </h1>
                  <a href="#">Shop now</a>
                </div>
              </a>
            </div>
            <div className="Items">
              <div className="contain1">
                <a href="#">
                  <img src="/image/10img3.webp" alt="img" />
                  <div className="item-content">
                    <h1>
                      The Nuevolution<br />Project
                    </h1>
                    <a href="#">Shop now</a>
                  </div>
                </a>
              </div>
              <div className="contain2">
                <a href="#">
                  <img src="/image/10img4.webp" alt="img" />
                  <div className="item-content">
                    <h1>
                      Kid's prescription
                      <br />
                      eyewear
                    </h1>
                    <a href="#">Learn more</a>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container03">
            <a href="#">
              <img src="/image/10img5.webp" alt="img" />
              <div className="item-content">
              <p>Faves from Open Call</p>
                <h1>
                  OMG,obsessed
                </h1>
                <a href="#">Shop now</a>
              </div>
            </a>
          </div>
        </section>
        <section className="main09">
          <div className="liqours">
            <h3>More From the Community</h3>
            <p>Hispanic brands you'll love.</p>
          </div>
          <Carousel className="carousel09" responsive={responsive4}>
            <div className="items">
              <img src="/image/11img1.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img2.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img3.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img4.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img5.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img6.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img7.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img8.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img9.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
            <div className="items">
              <img src="/image/11img10.webp" alt="item" />
              <div className="item-detail">
                <h4>$74.99</h4>
                <p>
                  Dogg Supply Men's, Women's & Big Men’s Short Sleeve Graphic
                  Tee, Sizes XS-3XL
                </p>
                <button>Add+</button>
              </div>
            </div>
          </Carousel>
        </section>
      </main>
      <hr className="customHr1"/>
    </React.Fragment>
  );
}

export default Home;
