import Image from "next/image";

const ServicesCard = (props) => {
  const {
    linkCol,
    titCol,
    descCol,
    title,
    color,
    desc,
    src,
    alt,
    width = 60,
    height = 60,
  } = props;

  return (
    <div
      className={`flex flex-col justify-between w-[430px] h-[445px] ${color} rounded-[20px]`}
    >
      <div className="flex flex-col justify-between gap-3">
        <div className="mx-12 mt-10">
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
        <h1 className={`text-[30px] font-semibold italic ${titCol} mt-5 mx-12`}>
          {title}
        </h1>
        <p className={`text-[20px] ${descCol} mt-2 mx-12`}>{desc}</p>
      </div>
      <div className="py-10">
        <a href="#" className={`text-[20px] ${linkCol} font-bold mt-5 mx-12`}>
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default ServicesCard;
