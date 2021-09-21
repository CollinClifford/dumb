import React, { useState } from "react";

function HelloWorld() {
  const [click, setClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [tickle, setTickle] = useState([]);
  const lis = tickle.map((result, index) => (
    <li key={index} style={{ listStle: "none" }}>
      {(result = "hehe")}
    </li>
  ));

  const handleClick = (value) => {
    setTickle([...tickle, value]);
    setClick(!click);
    setClickCount((currentClick) => currentClick + 1);
  };
  const asdf = () => {
    const filteredList = tickle.filter(
      (result, index) => index !== tickle.length - 1
    );
    setTickle(filteredList);
    setClickCount((currentClick) => currentClick -1)
  };
  const button = {
    backgroundColor: "red",
    padding: "14px",
    width: "180px",
    fontFamily: "cursive",
    textAlign: "center"
  };
  const numOfTick = {
    backgroundColor: "red",
    textAlign: "center",
    fontSize: "40px",
    borderRadius: "4px",
    borderStyle: "solid",
  }
  const list = {
    backgroundColor: "red",
    borderRadius: "4px",
    borderStyle: "solid",
    listStyle: "none"
  }

  return (
    <div col>
      <ul style={list}>{lis}</ul>
      <p style={numOfTick}>number of tickles: {clickCount}</p>
      <button onClick={handleClick} style={button}>
        {click ? "tickle some more" : "tickle"}
      </button>
      <button onClick={asdf} style={button}>
        don't tickle me
      </button>
      

    </div>
  );
}

export default HelloWorld;
