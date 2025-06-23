"use client";

import React, { useEffect, useState } from "react";

const CounterBox = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let target = 1000;
    let speed = 30;
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 right-0 w-[250px] h-[210px] rounded-xl bg-pear flex flex-col items-center justify-center px-6">
      <span className="font-bold text-center">
        <p className="text-4xl">{count}+</p>
        <p>Statisfied Client</p>
      </span>
      <p className="text-[12px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
        adipiscing elit, consectetur adipiscing elit,
      </p>
    </div>
  );
};

export default CounterBox;
