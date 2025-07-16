const ServicesCard = (props) => {
  const { title, color, desc, logo } = props;

  return (
    <div className={`w-[430px] h-[445px] ${color} rounded-[20px]`}>
      <div>
        <img
          src={logo}
          alt="Service Icon"
          className="w-[50px] h-auto mt-10 ml-10"
        />
        <h1 className="text-[24px] font-bold text-white mt-5 ml-10">{title}</h1>
        <p className="text-[16px] text-white mt-2 ml-10">{desc}</p>

        <a href="#" className="text-[16px] text-[#B7FF00] font-bold mt-5 ml-10">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
