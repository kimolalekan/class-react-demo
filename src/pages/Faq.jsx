import { useState } from "react";

const Faq = () => {
  const [count, setCount] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <h1>Faq</h1>
      <p>
        <div>Helllo</div>
      </p>
      <button onClick={() => setCount((previous) => previous + 1)}>Add</button>
      <h3>{count}</h3>
      <h2>
        {arr.map((i, key) => (
          <span key={key}>{i}</span>
        ))}
      </h2>
    </div>
  );
};

export default Faq;
