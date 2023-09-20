import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "../../UI/Input";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const onChangeEmailHandler = (e) => {
    setLoginDetails({ ...loginDetails, email: e.target.value });
  };

  const onChangePasswordHandler = (e) => {
    setLoginDetails({ ...loginDetails, password: e.target.value });
  };

  const onSubmitEventHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      });

      const fetchData = await response.json();
      if (fetchData.userId) {
        localStorage.setItem("token", fetchData.userId);
        setTimeout(() => {
          localStorage.removeItem("token");
        }, 15 * 60 * 1000);
      }
      alert(fetchData.message);
      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <form className="admin-form" onSubmit={onSubmitEventHandler}>
      <h1 className="admin-form-heading">Login</h1>
      <Input
        onChange={onChangeEmailHandler}
        type="text"
        className="form-input"
        name="email"
        placeholder="Email"
      />
      <Input
        onChange={onChangePasswordHandler}
        type="password"
        className="form-input"
        name="password"
        placeholder="Password"
      />
      <button className="admin-form-button" type="submit">
        Submit
      </button>
      <Link to="/user/signup">
        <p
          style={{
            textAlign: "end",
            display: "inline-block",
            marginLeft: "8rem",
            fontWeight: 900,
          }}
        >
          New user ? Signup
        </p>
      </Link>
    </form>
  );
};

export default Login;
