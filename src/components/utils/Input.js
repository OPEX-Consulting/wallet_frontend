import React from "react";
import "./Input.css";

function Input({
  title,
  type,
  placeholder,
  name,
  Icon,
  className,
  onChange,
  value,
}) {
  return (
    <div className="form__control">
      <label>{title}</label>
      <div className="form__input">
        <Icon className={className} />
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
