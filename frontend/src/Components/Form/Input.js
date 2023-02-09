import React, { useReducer } from "react";
import "./Input.css";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    }
    default: {
      return state;
    }
  }
};
export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      isValid: true,
    });
  };
  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={props.className}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );
  return <div>{element}</div>;
}
