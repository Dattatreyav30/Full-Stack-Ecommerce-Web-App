import { useState } from "react";
import Input from "../../UI/Input";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [userSignup, setUserSignUp] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const onClickEmailHandler = (e) => {
    setUserSignUp({ ...userSignup, email: e.target.value });
  };
  const onClicNumberHandler = (e) => {
    setUserSignUp({ ...userSignup, mobile: e.target.value });
  };
  const onClickPassHandler = (e) => {
    setUserSignUp({ ...userSignup, password: e.target.value });
  };
  const onSubmitEventHandler = async (e) => {
    e.preventDefault();
    let fetchData;
    try {
      const response = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        body: JSON.stringify(userSignup),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData = await response.json();
      alert(fetchData.message);
      setUserSignUp({ email: "", password: "", mobile: "" });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className="admin-form" onSubmit={onSubmitEventHandler}>
      <h1 className="admin-form-heading">Sign Up</h1>
      <Input
        value={userSignup.email}
        onChange={onClickEmailHandler}
        type="text"
        placeholder="Email"
        name="Email"
        className="form-input"
      />
      <Input
        value={userSignup.mobile}
        onChange={onClicNumberHandler}
        type="number"
        placeholder="Mobile"
        name="mobile"
        className="form-input"
      />
      <Input
        value={userSignup.password}
        onChange={onClickPassHandler}
        type="password"
        placeholder="password"
        name="password"
        className="form-input"
      />
      <button className="admin-form-button">submit</button>
      <Link to="/user/login">
        <p
          style={{
            textAlign: "end",
            display: "inline-block",
            marginLeft: "8rem",
          }}
        >
          Existing user ? Login
        </p>
      </Link>
    </form>
  );
};

export default SignUp;
