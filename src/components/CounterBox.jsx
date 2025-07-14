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
  // sm:w-[100px] md:w-[35%] lg:w[210px] md:h-[40%]
  return (
    <div className="absolute bottom-0 right-0 w-[36.5%] h-2/5 rounded-md md:rounded-lg bg-pear flex flex-col items-center justify-center p-2 lg:p-4">
      <span className="font-bold text-center">
        <p className="text-base md:text-xs lg:text-4xl">{count}+</p>
        <p className="text-[8px] md:text-[10px] lg:text-lg">
          Statisfied Client
        </p>
      </span>
      <p className="text-[8px] lg:text-base text-center leading-2 mt-0.5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur
        adipiscing elit, consectetur adipiscing elit,
      </p>
    </div>
  );
};

export default CounterBox;
