import "../../style/substyle/product.css";

export default function Product(prop) {
  return (
    <div className="card">
      <img src={prop.image} alt="" width={200} height={200} id="singleimage" />
      <div className="cardconatiner">
        <a href="" id="title">
          {prop.title}
        </a>
        <p id="description">{prop.description}</p>{" "}
        <p id="price">{"$" + prop.price}</p>
      </div>
    </div>
  );
}
