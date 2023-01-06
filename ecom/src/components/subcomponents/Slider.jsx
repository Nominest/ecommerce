import "../../style/substyle/slider.css";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slider-left">
        <div className="camera">
          <div>Canon</div>
          <div>camera</div>
        </div>
        <div>
          <ul>
            <li>
              <a href="" id="shop">
                Shop Now
              </a>
            </li>
            <li>
              <a href="" id="view">
                View More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="slider-right">
        <img src="./cam.png" alt="" />
      </div>
    </div>
  );
}
