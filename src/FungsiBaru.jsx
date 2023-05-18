import React, { useState } from "react";
import "./kumpulanCss/FungsiBaru.css";
import Komponen1 from "./Komponen1";
import Button from "./components/button";

function FungsiBaru() {
  const [nilai, setNilai] = useState(10);

  function handleIncrement() {
    setNilai(nilai + 1);
  }

  function handleDecrement() {
    setNilai(nilai - 1);
  }

  return (
    <div className="full-screen child-centered">
      <p className="">Button Clicked: {nilai} times</p>
      <Button
        warnaButton="red"
        onClick={() => {
          setNilai(nilai + 1);
        }}
        title="Increment"
      />
      <Button
        warnaButton="jingga"
        onClick={handleDecrement}
        title="Decrement"
      />

      {/* <button className="button-clicker">Ini Label 1</button>
      <button className="button-clicker">Ini Label 2</button> */}
    </div>
  );
}

export default FungsiBaru;
