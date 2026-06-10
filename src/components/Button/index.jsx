import "./button.css";

const Button = ({ title, variant = "primary", onclick }) => {
  return (
    <button className={variant} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
