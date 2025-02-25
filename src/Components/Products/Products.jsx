import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

import p1_img1 from "../../assets/product/paver1.webp";
import p1_img2 from "../../assets/product/paver2.webp";
import p1_img3 from "../../assets/product/paver3.webp";

import p2_img1 from "../../assets/product/pipes1.webp";
import p2_img2 from "../../assets/product/pipes2.webp";
import p2_img3 from "../../assets/product/pipes3.webp";

import p3_img1 from "../../assets/product/stone1.webp";
import p3_img2 from "../../assets/product/stone2.webp";
import p3_img3 from "../../assets/product/stone3.webp";

import p4_img1 from "../../assets/product/mold1.webp";
import p4_img2 from "../../assets/product/mold2.webp";

import p5_img1 from "../../assets/product/oxide1.webp";
import p5_img2 from "../../assets/product/oxide2.webp";

import p6_img1 from "../../assets/product/coat1.webp";
import p6_img2 from "../../assets/product/coat2.webp";

import p7_img1 from "../../assets/product/pc1.webp";
import p7_img2 from "../../assets/product/pc2.webp";
import p7_img3 from "../../assets/product/pc3.webp";
import p7_img4 from "../../assets/product/pc4.webp";
import p7_img5 from "../../assets/product/pc5.webp";
import p7_img6 from "../../assets/product/pc6.webp";

const products = [
  {
    id: 1,
    title: "1. Hardener for Paver & Block",
    images: [p1_img1, p1_img2, p1_img3],
    details: [
      "Greed M-70 to M-80.",
      "It takes 7 to 8 hours for setting after filling mold.",
      "Expires in 2 years from manufacturing.",
    ],
  },
  {
    id: 2,
    title: "2. Hardener for RCC Pipes, Fencing Poles & RCC Electricity Poles",
    images: [p2_img1, p2_img2, p2_img3],
    details: [
    ],
  },
  {
    id: 3,
    title: "3. Hardener for Crub Stone, MileStone & Road Divider",
    images: [p3_img1, p3_img2, p3_img3],
    details: [
    ],
  },
  {
    id: 4,
    title: "4. Surface Coating",
    images: [p6_img1, p6_img2],
    details: [
      "In 1 liter, it covers 100-120 sq. feet area.",
      "Expires in 6 months from manufacturing.",
    ],
  },
  {
    id: 5,
    title: "5. pc base melamine hardener for paver block, rcc pipes, fencing poles, rcc electricity poles, concrete floor and cement rodes",
    images: [p7_img1, p7_img2, p7_img3, p7_img4, p7_img5, p7_img6],
    details: [
    ],
  },
  {
    id: 6,
    title: "6. Mold Release Agent",
    images: [p4_img1, p4_img2],
    details: [
      "In 1 liter of Mold release agent, 4 liters of water should be added.",
      "Prevents concrete from sticking to molds.",
      "The coating and the mold release agent have the latest technology.",
    ],
  },
  {
    id: 7,
    title: "7. Colour-Oxide",
    images: [p5_img1, p5_img2],
    details: [
      "Red - 25 KG Packing.",
      "Yellow - 25 KG Packing.",
      "Black - 25 KG Packing.",
    ],
  },
];

const Products = () => {
  const sliders = useRef([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    arrows: false,
  };

  return (
    <section className={`products-container ${animate ? "animate" : ""}`}>
      <h2 className="products-heading">Our Products</h2>
      {products.map((product, index) => (
        <div key={product.id} className={`product-box ${animate ? "slide-up" : ""}`}>
          <div className="product-content-wrapper">
            <div className="product-img">
              {product.images.length > 1 ? (
                <Slider
                  {...sliderSettings}
                  ref={(el) => (sliders.current[index] = el)}
                >
                  {product.images.map((img, i) => (
                    <div key={i} className="slider-image">
                      <img src={img} alt={`Slide ${i + 1}`} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="single-image">
                  <img src={product.images[0]} alt={product.title} />
                </div>
              )}
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <ul>
                {product.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
