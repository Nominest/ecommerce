import "../style/main.css";
import Slider from "./subcomponents/Slider.jsx";
import Navbar from "./subcomponents/Navbar.jsx";
import Products from "./subcomponents/Products";
import Sale from "./subcomponents/Sale";
import SpecialProducts from "./subcomponents/SpecialProducts";
import Brands from "./subcomponents/Brands";

export default function Main() {
  return (
    <div className="main">
      <Slider />
      <Navbar />
      <Products />
      <Sale />
      <SpecialProducts />
      <Brands />
    </div>
  );
}
