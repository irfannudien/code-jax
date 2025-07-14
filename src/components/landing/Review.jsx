import Image from "next/image";
import TagSection from "@/components/TagSection";
import testi1 from "../../../public/Assets/testi1.png";
import testi2 from "../../../public/Assets/testi2.png";

const reviewer = [
  {
    name: "Maman Recing",
    comment: "Geloooo, Code jax mah keren beut anying!",
    occupation: "Peternak Lele",
    rating: 5,
    photo: testi1,
  },
  {
    name: "Mak Bertha",
    comment:
      "Kok bisa ya pengusaha ngoding sendiri,  Helllooowwww pake code jax lahh",
    occupation: "Pengusaha UMKM",
    rating: 4,
    photo: testi2,
  },
  {
    name: "Maman Recing",
    comment: "Geloooo, Code jax mah keren beut anying!",
    occupation: "Peternak Lele",
    rating: 5,
    photo: testi1,
  },
];

const Review = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full h-full bg-[rgba(167,167,167,0.05)] flex-row justify-center items-center rounded-md">
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
          sendiri kualitas layanan kami.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-10">
          {reviewer.length > 0 ? (
            reviewer.map((a, b) => {
              return (
                <div key={b} className="w-[95%]  p-5 rounded-md mt-5">
                  <div className="flex justify-center gap-4">
                    <Image
                      src={a.photo}
                      alt={a.name}
                      width={200}
                      height={200}
                      className="rounded-sm border-4"
                    />
                    <div className="flex-rows justify-around gap-2">
                      <h2 className="text-white text-[25px] font-bold">
                        {a.name}
                      </h2>
                      <p className="text-white text-[20px]">{`"${a.comment}"`}</p>
                      <p className="text-yellow-500 text-[50px]">
                        {"★".repeat(a.rating)}
                      </p>
                      <p className="text-gray-400 text-[18px] font-bold">
                        Occupation: {a.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-white text-center text-[20px]">
              No reviews available
            </p>
          )}
        </div>
        <div className="flex justify-center items-center gap-3 mt-10 mb-10">
          <button className="mt-5 border-2 border-[#B7FF00] text-black px-4 py-2 rounded-full  transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#B7FF00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M20 12H4m0 0l6-6m-6 6l6 6"
              ></path>
            </svg>
          </button>
          <button className="mt-5 bg-[#B7FF00] text-black px-4 py-2 rounded-full hover:bg-[#dbffab] transition-colors ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#204635"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 12h16m0 0l-6-6m6 6l-6 6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
