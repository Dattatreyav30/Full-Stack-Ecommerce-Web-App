import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../UI/Input";
const AdminForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    price: "",
    quantity: "",
  });

  const onChangeTitleHandler = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const onChnageUrlHandler = (e) => {
    setFormData({ ...formData, imageUrl: e.target.value });
  };

  const onChangePriceHandler = (e) => {
    setFormData({ ...formData, price: e.target.value });
  };

  const onChangeQtyHandler = (e) => {
    setFormData({ ...formData, quantity: e.target.value });
  };
  const onSubmitEventHandler = async (e) => {
    e.preventDefault();
    try {
      await fetch("/Add-product", {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({ title: "", imageUrl: "", price: "", quantity: "" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="admin-form" onSubmit={onSubmitEventHandler} method="POST">
      <h1 className="admin-form-heading">Add Product Form</h1>
      <Input
        value={formData.title}
        onChange={onChangeTitleHandler}
        className="form-input"
        type="text"
        name="title"
        placeholder="Title"
        required
      />
      <Input
        value={formData.imageUrl}
        onChange={onChnageUrlHandler}
        className="form-input"
        type="text"
        name="imageUrl"
        placeholder="imageUrl"
        required
      />
      <Input
        value={formData.price}
        onChange={onChangePriceHandler}
        className="form-input"
        type="number"
        name="price"
        placeholder="price"
        required
      />
      <Input
        value={formData.quantity}
        onChange={onChangeQtyHandler}
        className="form-input"
        type="number"
        name="Qty"
        placeholder="Qty"
        required
      />
      <button className="admin-form-button">submit</button>
    </form>
  );
};

export default AdminForm;
