import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] bg-[#043873] py-4 px-[220px] flex items-center text-white  justify-between ">
        <div className="flex items-center gap-2 ">
          <Image src="/Logo.png" alt="Logo" width={37} height={29} />
          <p className="font-bold text-[28px] leading-[33.89px] font-inter">
            whitepace
          </p>
        </div>
        <div className="flex gap-44 h-[60px] w-[735.5px] items-center">
          <ul className="text-[18px] font-medium leading-[23px] flex justify-between items-center gap-8 font-nav w-[549px] h-[23px] ">
            <li className="hover:text-[#FFE492]">Products</li>
            <li className="hover:text-[#FFE492]">Solutions</li>
            <li className="hover:text-[#FFE492]">Resources</li>
            <li className="hover:text-[#FFE492]">Pricing</li>
          </ul>
          <div>
            <button className="py-4 px-10 rounded-lg bg-[#FFE492] text-[#043873] font-medium text-[18px] leading-[23px] font-inter">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
