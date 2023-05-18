import React from "react";

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.warnaButton }}
      // style={{ backgroundColor: "" }}
      className="button-clicker"
      onClick={props.onClick}
    >
      {props.title}
      Increment
    </button>
  );
}

export default Button;
