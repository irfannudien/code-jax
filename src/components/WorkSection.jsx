import React from "react";
import TextMarquee from "./TextMarquee";
import { TiArrowRight } from "react-icons/ti";

export default function WorkSection() {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center gap-10 ">
      <div className="grid grid-cols-7 md:grid-rows-3 grid-rows-5 md:h-[360px] h-[400px] w-full md:gap-5 gap-2">
        <div className="bg-[#204635] md:col-span-4 col-span-7 md:row-span-3 row-span-2 rounded-xl grid grid-rows-3 grid-cols-5 items-center md:p-7 p-2 md:gap-7 gap-2">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="row-span-3 col-span-2 h-full rounded-lg"
          />
          <h1 className="col-span-3 row-span-1 font-helvetica font-bold xl:text-3xl lg:text-2xl md:text-xl text-[12px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
          </h1>
          <h1 className="col-span-3 row-span-1 font-helvetica xl:text-lg lg:text-[14px] md:text-[12px] text-[8px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <button className="cursor-pointer bg-[#CFFFB1] md:py-3 py-1 rounded-4xl lg:text-[20px] md:text-[16px] text-[10px] font-helvetica font-bold flex justify-center items-center gap-1 px-1 col-span-3 lg:w-[200px] md:w-[150px] w-[100px] ">
            Learn More <TiArrowRight  className="lg:w-[30px] md:w-[25px] w-[15px] lg:h-[30px] md:h-[25px] h-[15px]" />{" "}
          </button>
        </div>
        <div className="bg-[#D9D9D9] md:col-span-3 col-span-7 row-span-2 rounded-xl p-7 flex justify-center items-center ">
          <div className="flex flex-col h-full justify-center md:gap-5 gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-bold lg:text-3xl md:text-[26px] text-[16px]">Lorem ipsum dolor sit amet</h1>
              <svg
                viewBox="0 0 43 46"
                fill="none"
                className="lg:w-[40px] lg:h-[40px] md:w-[35px] w-[25px] md:h-[25px] h-[25px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1657 4.63282C20.205 2.67897 20.7237 1.70312 21.5006 1.70312C22.2776 1.70312 22.7962 2.67897 23.8356 4.63282L24.1021 5.13794C24.3993 5.69465 24.5469 5.97193 24.7765 6.15463C25.0061 6.33733 25.2931 6.40611 25.8671 6.54153L26.3878 6.6662C28.405 7.14338 29.4136 7.38411 29.6535 8.19231C29.8933 9.0005 29.2066 9.84523 27.831 11.5304L27.4743 11.9667C27.0848 12.4461 26.8901 12.6847 26.8019 12.9813C26.7138 13.2779 26.7425 13.5982 26.8019 14.2365L26.8552 14.8169C27.0643 17.0674 27.1668 18.1915 26.5395 18.6924C25.9122 19.1932 24.9672 18.7353 23.0791 17.824L22.5892 17.5875C22.0541 17.3296 21.7856 17.2006 21.5006 17.2006C21.2157 17.2006 20.9471 17.3296 20.4121 17.5875L19.9221 17.824C18.0361 18.7375 17.089 19.1932 16.4617 18.6924C15.8344 18.1915 15.9369 17.0674 16.146 14.8191L16.1993 14.2365C16.2588 13.5982 16.2875 13.2779 16.1993 12.9813C16.1112 12.6847 15.9164 12.4439 15.5269 11.9667L15.1702 11.5304C13.7967 9.84523 13.1079 9.0005 13.3478 8.19231C13.5876 7.38411 14.5962 7.14338 16.6134 6.6662L17.1341 6.54153C17.7081 6.40611 17.9951 6.33733 18.2247 6.15463C18.4543 5.97193 18.6019 5.69465 18.8971 5.13794L19.1657 4.63282ZM36.7321 13.9163C37.2528 12.9383 37.5111 12.4504 37.9006 12.4504C38.2901 12.4504 38.5484 12.9383 39.0691 13.9163L39.2024 14.1678C39.35 14.4472 39.4238 14.5848 39.5386 14.6772C39.6534 14.7696 39.7969 14.8019 40.0839 14.8706L40.3442 14.9308C41.3528 15.1716 41.8571 15.2898 41.976 15.696C42.0949 16.1023 41.7526 16.5214 41.0658 17.364L40.8875 17.5811C40.6927 17.8218 40.5943 17.9422 40.5513 18.0905C40.5082 18.2388 40.5226 18.3979 40.5513 18.7181L40.5779 19.0083C40.6804 20.1325 40.7337 20.6956 40.4201 20.945C40.1064 21.1943 39.6349 20.9665 38.6899 20.5108L38.4439 20.3926C38.1774 20.2636 38.0421 20.1991 37.9006 20.1991C37.7571 20.1991 37.6239 20.2636 37.3553 20.3926L37.1114 20.5108C36.1684 20.9665 35.6969 21.1943 35.3812 20.945C35.0675 20.6956 35.1188 20.1325 35.2233 19.0083L35.25 18.7181C35.2787 18.3957 35.2951 18.2367 35.25 18.0905C35.2069 17.94 35.1085 17.8218 34.9138 17.5811L34.7354 17.364C34.0487 16.5214 33.7043 16.1001 33.8252 15.696C33.9462 15.2919 34.4484 15.1716 35.457 14.9308L35.7174 14.8706C36.0044 14.8019 36.1479 14.7675 36.2627 14.6772C36.3775 14.5848 36.4513 14.445 36.5989 14.1678L36.7321 13.9163ZM3.9321 13.9163C4.45485 12.9383 4.7111 12.4504 5.1006 12.4504C5.4901 12.4504 5.7484 12.9383 6.2691 13.9163L6.40235 14.1678C6.54995 14.4472 6.62375 14.5848 6.73855 14.6772C6.85335 14.7696 6.99685 14.8019 7.28385 14.8706L7.5442 14.9308C8.5528 15.1716 9.0571 15.2898 9.17805 15.696C9.29695 16.1001 8.95255 16.5214 8.2658 17.364L8.08745 17.5811C7.8927 17.8218 7.7943 17.9422 7.75125 18.0905C7.7082 18.2388 7.72255 18.3979 7.75125 18.7181L7.7779 19.0083C7.8804 20.1325 7.9337 20.6956 7.62005 20.945C7.3064 21.1943 6.83285 20.9665 5.88985 20.5108L5.64385 20.3926C5.37735 20.2636 5.24205 20.1991 5.1006 20.1991C4.9571 20.1991 4.82385 20.2636 4.5553 20.3926L4.31135 20.5108C3.36835 20.9665 2.89685 21.1943 2.58115 20.945C2.2675 20.6956 2.31875 20.1325 2.4233 19.0083L2.44995 18.7181C2.47865 18.3957 2.49505 18.2367 2.44995 18.0905C2.4069 17.94 2.3085 17.8218 2.11375 17.5811L1.9354 17.364C1.24865 16.5214 0.904248 16.1001 1.02315 15.696C1.1441 15.2898 1.6484 15.1716 2.657 14.9308L2.91735 14.8706C3.20435 14.8019 3.34785 14.7675 3.46265 14.6772C3.57745 14.5848 3.65125 14.445 3.79885 14.1678L3.9321 13.9163Z"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M7.15039 41.2273H11.7834C13.8539 41.2273 15.951 41.4551 17.9662 41.8893C21.5642 42.6619 25.2656 42.7478 28.8927 42.1429C30.6721 41.842 32.4187 41.3799 34.0013 40.5803C35.4281 39.8559 37.1768 38.8392 38.3514 37.6979C39.524 36.5587 40.7458 34.6951 41.6109 33.2378C42.3571 31.9868 41.9963 30.4542 40.8196 29.5235C40.158 29.0202 39.3615 28.7491 38.5441 28.7491C37.7267 28.7491 36.9302 29.0202 36.2686 29.5235L32.5643 32.4575C31.1293 33.5967 29.561 34.6435 27.6935 34.9552C27.468 34.9924 27.2322 35.0261 26.9862 35.0562M26.9862 35.0562L26.7607 35.082M26.9862 35.0562C27.3143 34.963 27.6151 34.7857 27.8616 34.5403C28.171 34.2605 28.4237 33.9183 28.6047 33.5342C28.7857 33.1501 28.8914 32.7318 28.9155 32.3041C28.9396 31.8764 28.8816 31.448 28.7449 31.0442C28.6082 30.6404 28.3957 30.2695 28.1199 29.9534C27.8527 29.6425 27.5416 29.3764 27.1974 29.1646C21.4635 25.5771 12.5398 28.3091 7.15039 32.3178M26.9862 35.0562C26.9122 35.0735 26.8366 35.0822 26.7607 35.082M26.7607 35.082C25.5244 35.2119 24.2789 35.2148 23.042 35.0906"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.15 30.7208C7.15 28.9401 5.77328 27.4966 4.075 27.4966C2.37673 27.4966 1 28.9401 1 30.7208V41.468C1 43.2487 2.37673 44.6922 4.075 44.6922C5.77328 44.6922 7.15 43.2487 7.15 41.468V30.7208Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div className="font-helvetica">
              <p className="lg:text-lg md:text-sm text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor eiusmod tempor eiusmod tempor eiusmod tempor
                eiusmod tempor eiusmod tempor eiusmod tempor{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#D2F1E4] md:col-span-3 col-span-7 row-span-1 rounded-xl">
            <div className="h-full flex  items-center justify-center gap-4">
                <div className="flex flex-col justify-center items-center font-bold">
                    <h1 className="xl:text-4xl">35 +</h1>
                    <h1 className="xl:text-lg lg:text-[14px] md:text-[10px] text-[10px]">Satisfied client</h1>
                </div>
                <div className="flex flex-col justify-center items-center font-bold border-l-3 border-l-[#B9DECE] border-r-3 border-r-[#B9DECE] px-2">
                    <h1 className="xl:text-4xl">60 +</h1>
                    <h1 className="xl:text-lg lg:text-[14px] md:text-[10px] text-[10px]">Satisfied client</h1>
                </div>
                <div className="flex flex-col justify-center items-center font-bold">
                    <h1 className="xl:text-4xl lg:text-2xl md:text-lg">100 +</h1>
                    <h1 className="xl:text-lg lg:text-[14px] md:text-[10px] text-[10px]">Satisfied client</h1>
                </div>
            </div>
        </div>
      </div>
      <TextMarquee />
    </div>
  );
}
