import "./Input.css";

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      onClick={props.onclick}
      value={props.value}
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
