import { Fragment } from "react";

import './Products.css'
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductItems = () => {
  return (
    <Fragment>
      {productsArr.map((item) => {
        return (
          <div className="items">
            <h2>{item.title}</h2>
            <img alt="item" src={item.imageUrl} />
            <h4>{item.price}$</h4>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductItems
