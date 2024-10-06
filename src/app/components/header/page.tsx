import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [showTopBar, setShowTopBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlHeader = () => {
        if (typeof window !== "undefined") {
          if (window.scrollY > lastScrollY) {
            setShowTopBar(false);
          } else {
            setShowTopBar(true);
          }
          setLastScrollY(window.scrollY);
        }
      };
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", controlHeader);
    
          return () => {
            window.removeEventListener("scroll", controlHeader);
          };
        }
      }, [lastScrollY]);
  return (
    <div className="fixed z-50 w-full">
      <div
        className={`h-[42px] bg-[#FFCC00] flex items-center justify-between fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex gap-10 pl-96 items-center">
          <li className="flex items-center gap-2">
            <Image src="/images/location.png" alt="" width={30} height={30} />
            <div className="text-white">SaiGon-VietNam</div>
          </li>
          <li className="flex items-center gap-2">
            <Image src="/images/mail.png" alt="" width={30} height={30} />
            <div className="text-white">trilhmse173578@fpt.edu.vn</div>
          </li>
          <li className="flex items-center gap-2">
            <Image src="/images/telephone.png" alt="" width={30} height={30} />
            <div className="text-white">(84+)5835484</div>
          </li>
        </ul>
        <ul className="flex gap-10 pr-60 items-center">
          <li>
            <Image src="/images/search.png" alt="" width={30} height={30} />
          </li>
          <li>
            <Image src="/images/vietnam.png" alt="" width={30} height={30} />
          </li>
          <li>Hi  ❤️</li>
          <li>
            <button className="rounded-md border border-black px-4 text-white hover:text-[#D94E66] hover:bg-white"></button>
          </li>
        </ul>
      </div>

      <div
        className={`h-[106px] bg-[#F4F4F4] flex items-center justify-center fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out ${
          showTopBar ? "mt-[42px]" : "mt-0"
        }`}
      >
        <ul className="flex gap-[60px] items-center">
          <li>
            <Image src="/images/logo.png" alt="" width={106} height={106} />
          </li>
          <li
           
          >
          
            ADOPT
          </li>
          <li
            
          >
            DONATE
          </li>
          <li
           
          >
            VOLUNTEER
          </li>
          <li
           
          >
            NEWS
          </li>
          <li
            
          >
            CONTACT
          </li>
          <li
           
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
