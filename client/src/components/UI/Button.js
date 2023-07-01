
import './Button.css'
const Button = (props) => {
  return <button onClick={props.onClick} className="Button">{props.value}</button>;
};

export default Button;
