import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/CartContext/cart-context";
import Button from "../UI/Button";
import "./Products.css";

const ProductItems = () => {
  const cartCtx = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          throw new Error("Error while fetching Data :(");
        }
        const data = await response.json();
        setItems(data.products);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  if (isLoading) {
    return <h1 className="loading-text">Loading.....</h1>;
  }

  if (error) {
    return <h1 className="loading-text">{error}</h1>;
  }

  return (
    <div className="items">
      {items.map((item) => (
        <div key={item.id}>
          <h2 className="item-title">{item.title}</h2>
          <img className="item-image" alt="item" src={item.imageUrl} />
          <div className="price-add-container">
            <h3 className="item-price">Price - {item.price}$</h3>
            <Button
              onClick={() => addItemHandler(item)}
              className="add-button"
              value="Add to Cart"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItems;
