import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();

  const [productDetail, setProductDetails] = useState("");

  useEffect(() => {
    try {
      const fetchProductDetails = async () => {
        const response = await fetch(`http://localhost:5000/${params.id}`, {
          method: "GET",
        });
        const fetchData = await response.json();
        setProductDetails(fetchData.product);
      };
      fetchProductDetails();
    } catch (err) {
      console.log(err);
    }
  }, [params.id]);

  const { title, imageUrl, price } = productDetail;

  return (
    <section className="product-detail">
      <img className="product-detail-image" alt="product" src={imageUrl} />
      <div className="product-remains">
        <h2>{title}</h2>
        <h3>{price}</h3>
        <h3 className="star">4.1★</h3>
        <h4 className="star-ratings">13324 ratings and 13324reviews</h4>
        <h5>Available offers</h5>
        <div className="product-paragraph">
          <p>
            Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on
            orders priced between ₹15,000 to ₹39,999T&C
          </p>

          <p>
            Bank Offer10% instant discount on ICICI Bank Credit Cards, up to
            ₹300, on orders of ₹1750 and aboveT&C
          </p>

          <p>
            Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on
            orders priced between ₹40,000 to ₹49,999T&C
          </p>
          <p>
            Extra ₹2,000 Off on Bikes & Scooters on purchase of ₹30,000 or
            moreT&C
          </p>
        </div>
        <h2>Reviews</h2>
        <div>
          <p>Nice Loving it</p>
          <p>Very good product</p>
          <p>good quaklity and its affordable also</p>
          <p>nice amezing super duper❣️❣️❣️</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
