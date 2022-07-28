import React from "react";
import './input.scss'

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input}></input>
    </div>
  );
};

export default Input;
