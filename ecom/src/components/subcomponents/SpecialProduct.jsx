export default function SpecialProduct(prop) {
  return (
    <div className="specialcard">
      <img src={prop.image} alt="" width={200} height={200} id="singleimage" />
      <div className="cardconatiner">
        <a href="" id="title">
          {prop.title}
        </a>
        <p id="price">{"$" + prop.price}</p>
        <p id="category">{prop.category}</p>
        <p id="description">{prop.description}</p>{" "}
      </div>
    </div>
  );
}
