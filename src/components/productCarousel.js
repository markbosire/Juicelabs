import React from "react";
import Slider from "react-slick";

import ProductCard from "./product";
import products from "../products.json";

const ProductCarousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, // show 5 slides by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 5, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 7, // show 1 slide at 800px
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.products.map((product) => (
        <ProductCard
          imageURL={product.imageURL}
          name={product.name}
          price={product.price}
          color={product.color}
        />
      ))}
    </Slider>
  );
};

export default ProductCarousel;
