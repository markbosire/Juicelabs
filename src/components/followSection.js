import "../index.css";
import Slider from "react-slick";
function FollowSection() {
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
          slidesToShow: 6, // show 1 slide at 800px
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

  const images = Array.from(
    { length: 14 },
    (_, i) => `./assets/images/${i + 1}.png`
  );
  return (
    <div className="followSection">
      <section>
        <div className="column">
          <span>Say hey </span>
          <span>@Juicelabs</span>
        </div>

        <div className="myNavbarRight">
          <span>Follow</span>

          <div className="imageComponent">
            <img alt="logo" src="./assets/images/shop.png" />
          </div>
        </div>
      </section>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image} className="imgComponent">
            <img src={image} alt={`Image ${image}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default FollowSection;
