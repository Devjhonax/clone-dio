import { Controller } from "react-hook-form";
import "./input.css";

const Input = ({
  placeholder,
  control,
  errorMessage,
  variant,
  type,
  icone,
  name,
}) => {
  return (
    <>
      <div className="input-wrapper">
        <img src={icone} alt="icone" width={20} height={20} />
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <input
                {...field}
                type={type}
                placeholder={`${placeholder}`}
                className={variant}
              ></input>
            );
          }}
        />
      </div>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
    </>
  );
};

export default Input;
