const TagSection = ({ title }) => {
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="w-[200px] h-[45px] bg-[rgba(167,167,167,0.17)] flex justify-center items-center gap-3 rounded-md m- auto">
        <span className="font-helvetica font-bold text-[#B7FF00] text-[18px]">
          {title}
        </span>
        <svg
          width="25"
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8681 2.034H4.17362C3.59714 2.034 3.04427 2.2624 2.63664 2.66895C2.22901 3.07551 2 3.62691 2 4.20187V20.0996C2 20.6746 2.22901 21.226 2.63664 21.6325C3.04427 22.0391 3.59714 22.2675 4.17362 22.2675H25.9098C26.4863 22.2675 27.0392 22.0391 27.4468 21.6325C27.8545 21.226 28.0835 20.6746 28.0835 20.0996V12.8734M15.0417 22.2675V28.0485"
            stroke="#479F78"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8386 2.034L17.9404 4.92449L20.8386 7.81499M25.1858 2.034L28.084 4.92449L25.1858 7.81499M7.79688 28.0485H22.2877"
            stroke="#479F78"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TagSection;
