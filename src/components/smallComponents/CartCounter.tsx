'use client'
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // Ensure count doesn't become negative
    setCount(prevCount => Math.max(prevCount - 1, 0));
  };

  return (
    <div className="flex items-center gap-1">
     <FaMinusSquare onClick={decrement}></FaMinusSquare>
     <p>{count}</p>
     <FaPlusSquare onClick={increment}></FaPlusSquare>
    </div>
  );
}

export default Counter;