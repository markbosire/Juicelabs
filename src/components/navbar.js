import "../index.css";
function Navbar() {
  return (
    <div className="myNavbar">
      <section>
        <div className="myNavbarLeft">
          <span>Juice Labs</span>
        </div>
        <div className="myNavbarCenter">
          <span>Shop</span>
          <span>Contact us</span>
          <span>About us</span>
          <span>FAQ</span>
        </div>
        <div className="myNavbarRight">
          <span>SHOP NOW</span>

          <div className="imageComponent">
            <img alt="logo" src="./assets/images/shop.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
