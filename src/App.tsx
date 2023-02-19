import React, { useCallback, useEffect, useState } from "react";

import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const decrementHandler = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const escHandler = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", escHandler, false);
    return () => window.removeEventListener("keydown", escHandler, false);
  }, [escHandler]);

  return (
    <div className="counter">
      <div className="counter__value">{count}</div>
      <div>
        <button className="counter__button" onClick={incrementHandler}>
          +1
        </button>
        <button className="counter__button" onClick={decrementHandler}>
          -1
        </button>
      </div>
    </div>
  );
};

export default App;
