const Footer = () => {
  return (
    <footer className="relative bg-[#002b23] text-white">
      {/* Lengkungan atas */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            fill="#002b23"
            d="M0,0 C360,150 1080,-150 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Isi footer */}
      <div className="px-8 py-16 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} WebmuKuat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
