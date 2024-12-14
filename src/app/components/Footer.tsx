import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-[1920px] h-[461px] pt-[140px] bg-[#043873] pb-8 px-[220px] ">
        <div className="w-[1480px] h-[289px] flex flex-col justify-between">
          <div className="w-[1480px] h-[169px] flex gap-[145px]">
            <div className="w-[259px] h-[169px] flex flex-col gap-[15px]">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/Logo.png"}
                  width={37}
                  height={29}
                  alt="logo icon"
                ></Image>
                <p className="font-inter font-bold text-[28px] leading-[33.89px] text-white">
                  whitepace
                </p>
              </div>
              <p className="w-[240px] h-[120px] font-inter text-[18px] leading-[30px] text-[#F7F7EE] ">
                whitepace was created for{" "}
                <span className="block">
                  the new ways we live and work. We make a better workspace
                  around the world
                </span>
              </p>
              <div className=""></div>
            </div>
            <div className="w-[259px] h-[127px] flex flex-col gap-[15px]">
              <p className="font-inter font-bold text-[18px] leading-[21.78px] text-white ">
                Product
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Overview
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Pricing
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Customer stories
              </p>
            </div>
            <div className="w-[259px] h-[130px] flex flex-col gap-[16px]">
              <p className="font-inter font-bold text-[18px] leading-[21.78px] text-white ">
                Resources
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Blog
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Guides & tutorials
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Help center
              </p>
            </div>
            <div className="w-[259px] h-[130px] flex flex-col gap-[16px]">
              <p className="font-inter font-bold text-[18px] leading-[21.78px] text-white ">
                Company
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                About us
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Careers
              </p>
              <p className="font-inter  leading-[20px] text-white hover:text-[#FFE492] ">
                Media kit
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-[1480px] border border-[#2E4E73]"></div>
            <div className="w-[1480px] h-[20px] leading-5 text-white flex items-center justify-center font-inter">
              ©2021 Whitepace LLC.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
