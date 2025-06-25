import ButtonHome from "@/components/ButtonHome";
import CounterBox from "@/components/CounterBox";
import Image from "next/image";
import { IoArrowRedo } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex flex-col w-[40%] gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl text-primary-white font-bold leading-20">
            <span className="text-[#5FCE66]">Ngoding?</span> <br /> Serahin aja,
            kami kuat
          </h1>
          <p className="text-primary-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <ButtonHome
              fillColor="#CFFFB1"
              className="scale-x-[-1] scale-y-[-1] "
              svgHeight="45"
              svgViewBox="0 0 220 64"
            >
              <span className="absolute left-4 inset-0 justify-center scale-x-[-1] scale-y-[-1] flex items-center gap-2">
                <p>Read More</p>
                <IoArrowRedo size={20} />
              </span>
            </ButtonHome>
            <ButtonHome svgHeight="45" svgViewBox="0 0 220 64">
              <span className="absolute left-8 inset-0 justify-cente flex items-center gap-2">
                <p>Contact Us</p>
                <IoArrowRedo size={20} />
              </span>
            </ButtonHome>
          </div>
        </div>
      </div>

      <div className="w-[60%] relative">
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dad9qhbnx/image/upload/v1750665684/landing_img.png"
            alt="codejax.com"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        <CounterBox />
      </div>
    </div>
  );
};

export default Hero;
