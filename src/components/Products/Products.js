import { useContext } from "react";
import CartContext from "../Store/CartContext/cart-context";
import Button from "../UI/Button";
import "./Products.css";
const productsArr = [
  {
    id: 1,
    title: "Persian",
    price: 100,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xuossutvrUNzL9jmF_yzCZ7MOPvFUQhVTA&usqp=CAU",
    quantity: 2,
  },
  {
    id: 2,
    title: "Siamese",
    price: 100,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/02/15/12/12/cat-2068462_1280.jpg",
    quantity: 2,
  },
  {
    id: 3,
    title: "Maine Coon",
    price: 50,
    imageUrl:
      "https://www.awesomeinventions.com/wp-content/uploads/2015/12/lion-look-cat.jpg",
    quantity: 3,
  },
  {
    id: 4,
    title: "Bengal",
    price: 70,
    imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2016/08/bengal-cat-spots-fur-thor-5.jpg",
    quantity: 1,
  },
  {
    id: 5,
    title: "Sphynx",
    price: 120,
    imageUrl:
      "https://i0.wp.com/www.99inspiration.com/wp-content/uploads/2016/08/Thor-The-Cute-Bengal-Cat-With-Purrfectly-Fur-99.jpg?fit=605%2C587&ssl=1",
    quantity: 4,
  },
  {
    id: 6,
    title: "Scottish Fold",
    price: 80,
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/932/993/66/cute-scottish-fold-cat-wallpaper-preview.jpg",
    quantity: 2,
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
