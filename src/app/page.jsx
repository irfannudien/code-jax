import ButtonHome from "@/components/ButtonHome";
import CounterBox from "@/components/CounterBox";
import Image from "next/image";
import React from "react";
import { IoArrowRedo } from "react-icons/io5";

export const metadata = {
  title: "Home | CODE JAX",
  description:
    "CODE JAX provides innovative software solutions to help your business grow. Build your future with us.",
};

const HomePage = () => {
  return (
    <>
      <div className="flex gap-10 items-center">
        <div className="flex flex-col w-[40%] gap-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl text-primary-white font-bold leading-20">
              <span className="text-[#5FCE66]">Ngoding?</span> <br /> Serahin
              aja, kami kuat
            </h1>
            <p className="text-primary-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              width={300}
              height={200}
              className="w-full"
            />
          </div>

          <CounterBox />
        </div>
      </div>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-[95%] h-[300px] bg-[rgba(167,167,167,0.17)] flex-row justify-center items-center rounded-md">
            <TagSection title="Testimonials" />
            <h1 className="text-white text-center text-[55px] font-bold mb-5">
              What Our Clients Says
            </h1>
            <p className="text-white text-center text-[20px]">
              Kami percaya, kepercayaan dibangun dari hasil dan pengalaman.
              <br />
              Berikut adalah beberapa tanggapan langsung dari klien yang telah
              bekerja sama dengan Code Jax.
              <br /> Dari sekolah, UMKM, hingga brand pribadi — mereka merasakan
              sendiri kualitas layanan kami: komunikatif, efisien, dan bisa
              diandalkan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
