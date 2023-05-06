import Navbar from "./components/navbar";
import MidSection from "./components/midSection";
import SimpleSlider from "./components/slider";
import ShopSection from "./components/shopSection";
import FollowSection from "./components/followSection";
function App() {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <MidSection />
      <ShopSection />
      <FollowSection />
    </div>
  );
}

export default App;
