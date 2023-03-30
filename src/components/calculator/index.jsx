import { useState, useEffect } from "react";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState("");
  console.log(operator);

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  return (
    <div
      className="calculator-box"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        borderRadius: "15px",
        width: "400px",
        height: "650px",
      }}
    >
      <h1
        className="calculator-display"
        style={{
          width: "300px",
          fontSize: "60px",
          fontWeight: "700",
          textAlign: "end",
          color: "#fff",
          margin: "0",
          marginBottom: "25px",
        }}
      >
        {num}
      </h1>
      <div
        className="calculator-buttons"
        style={{
          width: "241px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            setNum(0);
          }}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
            color: "black",
          }}
        >
          AC
        </button>
        <button
          onClick={() => {
            if (num > 0) {
              setNum(-num);
            } else {
              setNum(Math.abs(num));
            }
          }}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#000",
            margin: "0.3em",
          }}
        >
          +/-
        </button>
        <button
          onClick={() => {
            setNum(parseFloat(num) / 100);
          }}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#000",
            margin: "0.3em",
          }}
        >
          %
        </button>
        <button
          onClick={(e) => {
            setOperator(e.target.value);
            setOldNum(num);
            setNum(0);
          }}
          value={"/"}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#fff",
            background: "#F0993C",
            margin: "0.3em",
          }}
        >
          /
        </button>
        <button
          onClick={inputNum}
          value={7}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#fff",
            background: "#505050",
            margin: "0.3em",
          }}
        >
          7
        </button>
        <button
          onClick={inputNum}
          value={8}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            color: "#fff",
            borderRadius: "2em",
            margin: "0.3em",
            background: "#505050",
          }}
        >
          8
        </button>
        <button
          onClick={inputNum}
          value={9}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            color: "#fff",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
            background: "#505050",
          }}
        >
          9
        </button>
        <button
          onClick={(e) => {
            setOperator(e.target.value);
            setOldNum(num);
            setNum(0);
          }}
          value={"*"}
          style={{
            width: "3em",
            height: "3em",
            color: "#fff",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            background: "#F0993C",
            margin: "0.3em",
          }}
        >
          *
        </button>
        <button
          onClick={inputNum}
          value={4}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#fff",
            background: "#505050",
            margin: "0.3em",
          }}
        >
          4
        </button>
        <button
          onClick={inputNum}
          value={5}
          style={{
            width: "3em",
            height: "3em",
            color: "#fff",
            background: "#505050",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
          }}
        >
          5
        </button>
        <button
          onClick={inputNum}
          value={6}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            background: "#505050",
            border: "none",
            color: "#fff",
            borderRadius: "2em",
            margin: "0.3em",
          }}
        >
          6
        </button>
        <button
          onClick={(e) => {
            setOperator(e.target.value);
            setOldNum(num);
            setNum(0);
          }}
          value={"-"}
          style={{
            width: "3em",
            color: "#fff",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            background: "#F0993C",
            margin: "0.3em",
          }}
        >
          -
        </button>
        <button
          onClick={inputNum}
          value={1}
          style={{
            width: "3em",
            color: "#fff",
            height: "3em",
            fontSize: "1.5em",
            border: "none",
            background: "#505050",
            borderRadius: "2em",
            margin: "0.3em",
          }}
        >
          1
        </button>
        <button
          onClick={inputNum}
          value={2}
          style={{
            width: "3em",
            height: "3em",
            background: "#505050",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            color: "#fff",
            margin: "0.3em",
          }}
        >
          2
        </button>
        <button
          onClick={inputNum}
          value={3}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            color: "#fff",
            background: "#505050",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
          }}
        >
          3
        </button>
        <button
          onClick={(e) => {
            setOperator(e.target.value);
            setOldNum(num);
            setNum(0);
          }}
          value={"+"}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            color: "#fff",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
            background: "#F0993C",
          }}
        >
          +
        </button>
        <button
          onClick={inputNum}
          value={0}
          style={{
            width: "3em",
            height: "3em",
            color: "#fff",
            fontSize: "1.5em",
            background: "#505050",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
          }}
        >
          0
        </button>
        <button
          onClick={inputNum}
          value={"."}
          style={{
            width: "3em",
            height: "3em",
            fontSize: "1.5em",
            background: "#505050",
            border: "none",
            borderRadius: "2em",
            color: "#fff",
            margin: "0.3em",
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            if (operator === "+") {
              setNum(parseFloat(oldNum) + parseFloat(num));
            } else if (operator === "-") {
              setNum(parseFloat(oldNum) - parseFloat(num));
            } else if (operator === "*") {
              setNum(parseFloat(oldNum) * parseFloat(num));
            } else if (operator === "/") {
              setNum(parseFloat(oldNum) / parseFloat(num));
            } else {
              alert("You must select an operator before the calculus!");
              setNum(0);
            }
          }}
          style={{
            width: "3em",
            background: "#F0993C",
            height: "3em",
            color: "#fff",
            fontSize: "1.5em",
            border: "none",
            borderRadius: "2em",
            margin: "0.3em",
            position: "relative",
            left: "88px",
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
