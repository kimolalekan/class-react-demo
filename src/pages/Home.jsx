import React, { useState, useEffect, useRef, useMemo } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useCount from "../stores/zustand";

export default function Home() {
  const [time, setTime] = React.useState("Loading...");
  const [entered, setEntered] = React.useState(false);
  const boxRef = useRef(null);
  const { count, incrementCount, decrementCount, fruit, setFruit } = useCount();

  // useEffect(() => {
  //   console.log((boxRef.current.innerHTML = "Good box"));
  //   const subscribe = setInterval(() => {
  //     let count = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  //     setTime(count);
  //   }, 1000);
  // }, [time]);

  const toggles = (state) => {
    if (state === "increment") {
      incrementCount();
    } else if (state === "decrement") {
      decrementCount();
    }
  };

  const handleFruit = (e) => {
    let value = e.target.value;
    setFruit(value);
  };

  const handleEnter = () => {
    setEntered(true);
  };

  const handleLeave = () => {
    setEntered(false);
  };

  const expensiveComputation = () => {
    return [1, 2];
  };

  const computes = useMemo(() => {
    return expensiveComputation();
  }, []);

  return (
    <>
      <Navbar username={"James Brown"} />
      <div className="page-container top-100 min-height">
        <div className="counter-grid">
          <div>
            <button onClick={() => toggles("decrement")}>-</button>
          </div>
          <div>{count}</div>
          <div>
            <button onClick={() => toggles("increment")}>+</button>
          </div>
        </div>
        {/* <div>
          {Array.from({ length: 10 }).map((item, key) => (
            <h1 key={key}>{key + 1}</h1>
          ))}
        </div> */}
        <h1>{time}</h1>
        {/* <h1>
          Hello {new Date().toDateString()} {new Date().getHours()}:
          {new Date().getMinutes()}
        </h1> */}

        <select onChange={handleFruit}>
          <option value="" disabled>
            Fruits
          </option>
          <option>Orange</option>
          <option>Apple</option>
          <option>Guava</option>
          <option>Papaya</option>
          <option>Beetroot</option>
        </select>
        <h1>I Love {fruit}</h1>

        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className={`box ${entered ? "entered" : "leave"}`}
        >
          Box
        </div>
        <div ref={boxRef} className="box entered">
          Box 2
        </div>
      </div>
      <Footer />
    </>
  );
}
