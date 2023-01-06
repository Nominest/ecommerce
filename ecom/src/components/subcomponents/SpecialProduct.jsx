import "../../style/substyle/special.css";
import Product from "./Product";
const datas = [
  {
    title: "Camera",
    image:
      "https://media.the-digital-picture.com/Images/Review/Sony-a7-III.jpg",
    description: "Sony Alpha iii",
    price: "1000",
    category: "camera",
  },
  {
    title: "Wireless headphones",
    image:
      "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
    description: "Beat",
    price: "350",
    category: "accessories",
  },
  {
    title: "RTX3070",
    image: "https://m.media-amazon.com/images/I/61XC1vb1HFL.jpg",
    description: "Graphic card",
    price: "1000",
    category: "pcParts",
  },
];
export default function SpecialProduct() {
  return (
    <div className="special">
      <div className="specialimage">
        <img src="./pexel.png" alt="" />
        <div className="specialright">
          <p id="orange">New Laptop</p>
          <p id="sale">Sale up to 50% off</p>
          <p>12 inch hd display</p>
          <p>
            <a href="" id="orange">
              Shop Now
            </a>
          </p>
        </div>
      </div>
      <div className="specialbottom">
        {datas.map((data, index) => {
          return (
            <Product
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
