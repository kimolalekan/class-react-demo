import React, { useState, useEffect, useRef, useMemo } from "react";
import { observer } from "mobx-react-lite";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AccountStore from "../stores/mobx/account";

const Home = observer(() => {
  const [time, setTime] = React.useState("Loading...");
  const [fruit, handleFruit] = React.useState("fruit");
  const [entered, setEntered] = React.useState(false);
  const boxRef = useRef(null);
  const [{ name, email, phone, setName }] = useState(() => new AccountStore());

  // useEffect(() => {
  //   console.log((boxRef.current.innerHTML = "Good box"));
  //   const subscribe = setInterval(() => {
  //     let count = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  //     setTime(count);
  //   }, 1000);
  // }, [time]);

  const getFruit = (e) => {
    console.log(e.target.value);
    handleFruit(e.target.value);
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
        <form>
          <p>
            <input
              placeholder="Name"
              defaultValue={name}
              onKeyUp={(e) => setName(e.target.value)}
            />
            {name}
          </p>
          <p>
            <input
              placeholder="Email"
              // onKeyUp={(e) => handleForm("email", e.target.value)}
            />
            {/* {form.email} */}
          </p>
          <p>
            <input
              placeholder="Phone"
              // onKeyUp={(e) => handleForm("phone", e.target.value)}
            />
            {/* {form.phone} */}
          </p>
          <p>
            <button>Save</button>
          </p>
        </form>
        <select onChange={getFruit}>
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
});

export default Home;
