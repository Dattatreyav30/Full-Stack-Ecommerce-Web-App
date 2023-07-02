import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext/cart-context";
import Button from "../UI/Button";
import "./Products.css";
const ProductItems = () => {
  const cartCtx = useContext(CartContext);

  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const response = await fetch("http://localhost:5000/");
      const data = await response.json();
      setItems(data.products);
      setisLoading(false);
    };
    fetchData();
  }, []);

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <>
      <div className="items">
        {!isLoading &&
          items.map((item) => {
            return (
              <div key={item.id}>
                <h2 className="item-title">{item.title}</h2>
                <img className="item-image" alt="item" src={item.imageUrl} />
                <div className="item-details">
                  <div className="price-add-container">
                    <h3 className="item-price">Price - {item.price}$</h3>
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
      {isLoading && <h1 className="loading-text">Loading.....</h1>}
    </>
  );
};

export default ProductItems;
