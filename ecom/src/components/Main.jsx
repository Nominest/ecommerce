import "../style/main.css";
import Slider from "./subcomponents/Slider.jsx";
import Navbar from "./subcomponents/Navbar.jsx";
export default function Main() {
  return (
    <div className="main">
      <Slider />
      <Navbar />
    </div>
  );
}
