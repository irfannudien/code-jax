import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center mt-6 overflow-visible">
      <nav className="bg-old-green text-white pl-8 flex justify-between items-center w-[95%] rounded-md relative overflow-visible">
        <div className="flex items-center">
          <svg
            height="28"
            viewBox="0 0 50 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.3846 42L16.0735 42L16.0735 33.8689L23.7949 33.8688L23.7949 19.6393L12 19.6393L12 11L27.3846 11L32 16.5902L32 37.9344L27.3846 42Z"
              fill="white"
            />
            <path
              d="M4.75472 0H28V8.13115H8.45283V22.3607H20.6038V31H4.75472L0 25.4098V4.06557L4.75472 0Z"
              fill="#B7FF00"
            />
          </svg>
          <div className="font-helvetica font-bold">CODE JAX</div>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/work" className="hover:underline">
            Work
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/service" className="hover:underline">
            Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <button className="relative text-black font-semibold group overflow-visible">
            <svg
              height="40"
              viewBox="-20 0 230 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition group-hover:[filter:drop-shadow(0_0_5px_#B9F916)] cursor-pointer rounded-md"
            >
              <path
                d="M218 64H12.0086C2.94755 64 -2.67119 54.4405 2.20801 46.8054C14.3221 27.8487 35.0488 1.59436e-05 52.2677 7.33729e-06L218.076 6.38786e-06C224.703 6.89034e-06 230 5.37259 230 12V52C230 58.6274 224.627 64 218 64Z"
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
      </nav>
    </div>
  );
};

export default Navbar;
