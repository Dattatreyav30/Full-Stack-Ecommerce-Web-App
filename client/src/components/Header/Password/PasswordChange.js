import { useState } from "react";
import Input from "../../UI/Input";
import { useNavigate } from "react-router-dom";

const PassWordChange = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState({
    password: "",
  });

  const onChangeHandler = (e) => {
    setNewPassword({ ...newPassword, password: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/user/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(newPassword),
    });
    const fetchData = await response.json();
    if (response.ok) {
      alert(fetchData.message);
      navigate("/");
    }
    if (!response.ok) {
      alert("Something went wrong");
    }
  };
  return (
    <form className="admin-form" onSubmit={onSubmitHandler}>
      <Input
        className="form-input"
        placeholder="enter a new password"
        onChange={onChangeHandler}
      />
      <button className="admin-form-button">change</button>
    </form>
  );
};

export default PassWordChange;
