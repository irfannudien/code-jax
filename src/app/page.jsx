import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Home | CODE JAX",
  description:
    "CODE JAX provides innovative software solutions to help your business grow. Build your future with us.",
};

const HomePage = () => {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col w-[40%]">
        {/* <div className="bg-badges py-1 px-4 text-lime font-medium rounded-md">
          <h4>Digital Agency</h4>
        </div> */}
        <div>
          <h1 className="text-8xl text-primary-white font-bold leading-28">
            <span className="text-[#5FCE66]">Ngoding?</span> <br /> Serahin aja,
            kami kuat
          </h1>
        </div>

        <div>
          <button className="relative text-black font-semibold group overflow-visible">
            <svg
              height="40"
              viewBox="-20 0 300 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition group-hover:[filter:drop-shadow(0_0_5px_#B9F916)] cursor-pointer rounded-md"
            >
              <path
                d="M12 64H218C227.052 64 232.671 54.4405 227.792 46.8054C215.678 27.8487 194.951 0 177.732 0H12C5.373 0 0 5.37258 0 12V52C0 58.6274 5.373 64 12 64Z"
                fill="#B9F916"
              />
              <text
                x="55%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="black"
                fontSize="24"
                fontWeight="600"
                fontFamily="sans-serif"
                className="cursor-pointer"
              >
                Enquire now
              </text>
            </svg>
          </button>
        </div>
        <div></div>
      </div>

      <div className="w-[60%]">
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dad9qhbnx/image/upload/v1750665684/landing_img.png"
            alt="codejax.com"
            width={400}
            height={300}
            className="w-full b"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
