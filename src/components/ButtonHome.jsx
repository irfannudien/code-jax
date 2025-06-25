import React from "react";

const ButtonHome = (props) => {
  const {
    className,
    children,
    fillColor = "#B9F916",
    svgHeight = "40",
    svgViewBox = "0 0 230 64",
  } = props;
  return (
    <button
      className={`relative text-black font-semibold group overflow-visible ${className}`}
    >
      <svg
        height={svgHeight}
        viewBox={svgViewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-600 group-hover:[filter:drop-shadow(0_0_5px_#B9F916)] cursor-pointer rounded-md"
      >
        <path
          d="M218 64H12.0086C2.94755 64 -2.67119 54.4405 2.20801 46.8054C14.3221 27.8487 35.0488 1.59436e-05 52.2677 7.33729e-06L218.076 6.38786e-06C224.703 6.89034e-06 230 5.37259 230 12V52C230 58.6274 224.627 64 218 64Z"
          fill={fillColor}
        />
      </svg>
      <div className="cursor-pointer">{children}</div>
    </button>
  );
};

export default ButtonHome;
