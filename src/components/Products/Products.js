import { useContext } from "react";
import CartContext from "../Store/CartContext/cart-context";
import Button from "../UI/Button";
import "./Products.css";
const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 2,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id: 3,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id: 4,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const ProductItems = () => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <div className="items">
      {productsArr.map((item) => {
        return (
          <div>
            <h2 className="item-title">{item.title}</h2>
            <img className="item-image" alt="item" src={item.imageUrl} />
            <div className="item-details">
              <div className="price-add-container">
                <h3 className="item-price">Price-{item.price}$</h3>
                <Button
                  onClick={() => addItemHandler(item)}
                  className="add-button"
                  value="Add to Cart"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItems;
