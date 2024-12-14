import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-[829px] w-[1920px] bg-[#043873] py-[140px] px-[220px] flex items-center">
        <div className="w-[656px] h-[361px] bg-inherit flex flex-col gap-[60px]">
          <div className="w-[656px] h-[238px] flex flex-col gap-6">
            <p className="font-inter font-bold text-[64px] leading-[77.45px] text-white">
              Get More Done with whitepace
            </p>
            <p className="font-inter text-[18px] leading-[30px] text-white">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
          </div>
          <button className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] flex items-center justify-center text-white font-inter font-medium text-[18px] leading-[23px] gap-2">
            Try Whitepace free
            <Image
              src={"/arrow.png"}
              width={10}
              height={10}
              alt="arrow"
            ></Image>
          </button>
        </div>
        <div className="h-[549px] w-[824px] bg-[#C4DEFD]"></div>
      </div>
    </>
  );
};

export default Hero;
