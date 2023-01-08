import SpecialProduct from "./SpecialProduct";
import "../../style/substyle/special.css";
const specialdata = [
  {
    title: "JBL bar 2.1 deep bass",
    image: "https://m.media-amazon.com/images/I/61nBOdVarBL.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    category: "speaker",
    price: "117,00",
  },
  {
    title: "Who avoids a pain that produces?",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, ex itaque dicta alias sunt amet sapiente ipsa molestiae praesentium ipsum placeat necessitatibus tempore? Error et quam iste hic magni!",
    category: "By spacing tech",
    price: "",
  },
  {
    title: "Who avoids a pain that produces?",
    image:
      "https://www.techtic.com/wp-content/uploads/2019/10/design-sprint-process-for-product-design-development.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia saepe nobis sint eum aut tenetur voluptatem blanditiis molestiae quae, deserunt exercitationem maiores asperiores magni voluptas deleniti quibusdam quod est doloribus?",
    category: "By spacing tech",
    price: "",
  },
];
export default function SpecialProducts() {
  return (
    <div className="products">
      <div className="leftside">
        <div className="specialblue">Special Product</div>
        <SpecialProduct
          image={specialdata[0].image}
          price={specialdata[0].price}
          title={specialdata[0].title}
          description={specialdata[0].description}
        />
        <div className="addtocard">
          <a href="">Add to card</a>
        </div>
      </div>
      <div className="rightside">
        <div className="border">
          <SpecialProduct
            image={specialdata[1].image}
            title={specialdata[1].title}
            description={specialdata[1].description}
            category={specialdata[1].category}
          />
        </div>
        <div className="border">
          <SpecialProduct
            image={specialdata[2].image}
            title={specialdata[2].title}
            description={specialdata[2].description}
            category={specialdata[2].category}
          />
        </div>
      </div>
    </div>
  );
}
