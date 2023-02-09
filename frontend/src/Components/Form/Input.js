import React, { useReducer } from "react";
import validator from "../../validators/validator";
import "./Input.css";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};
export default function Input(props) {
  console.log(props.validations);
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validations: props.validations,
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
