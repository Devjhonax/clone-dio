import "./button.css";
import {IButton} from "./types"

const Button = ({ title, variant = "primary", onclick}: IButton) => {
  return (
    <button className={variant} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
