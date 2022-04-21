import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  }

  return (
    <div>
      <h1 onClick={increment}>{count}</h1>
    </div>
  )
}

export default Counter