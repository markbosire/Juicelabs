import "../index.css";
import ProductCarousel from "./productCarousel";
function MidSection() {
  return (
    <div className="midSection">
      <div className="myNavbarRight">
        <span>SHOP NOW</span>

        <div className="imageComponent">
          <img alt="logo" src="./assets/images/shop.png" />
        </div>
      </div>
      <div className="retroComponent">
        <img alt="logo" src="./assets/images/Retro.png" />
      </div>
      <span className="title">Your Trusted</span>
      <span className="title">Source for Delicious,</span>
      <span className="title">Healthy Drinks.</span>
      <span className="paragraph">
        Discover the perfect balance of taste and nutrition with Juice Labs. Our
        selection of healthy drinks is sure to satisfy your thirst and nourish
        your body. From refreshing waters to energizing smoothies, we have
        something for everyone.
      </span>
      <div className="marquee">
        <div className="marquee-bottom">
          <marquee direction="right">
            Low calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar *
          </marquee>
        </div>
        <div className="marquee-top">
          <marquee direction="left">
            Low calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar * Low
            calories * No added sugar * Low calories * No added sugar *
          </marquee>
        </div>
      </div>
      <div className="range">
        <span className="title">Explore Our Wide Range of</span>
        <span className="title">Healthy Drink Options</span>
        <br></br>
        <span className="paragraph">
          From refreshing waters to energizing smoothies, we have something for
          every taste and need
        </span>
      </div>
      <div className="carousel">
        <ProductCarousel />
      </div>
    </div>
  );
}
export default MidSection;
