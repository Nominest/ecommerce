import "../style/main.css";
import Slider from "./subcomponents/Slider.jsx";
import Navbar from "./subcomponents/Navbar.jsx";
import Products from "./subcomponents/Products";
import SpecialProduct from "./subcomponents/SpecialProduct";

export default function Main() {
  return (
    <div className="main">
      <Slider />
      <Navbar />
      <Products />
      <SpecialProduct />
    </div>
  );
}
