'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { logout } from "../../../lib/features/auth/authSlice"; 
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { usePathname } from 'next/navigation'; // Import usePathname từ Next.js

const Header2 = () => {
  const router = useRouter(); 
  const dispatch = useAppDispatch(); 
  const token = useAppSelector((state) => state.auth.token); 
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const [hasHydrated, setHasHydrated] = useState(false);
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
    setHasHydrated(true);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const handleClick = (path: string) => {
    router.push(path); // Điều hướng đến trang mới
  };

  const handleLoginClick = () => {
    router.push("/signin");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    router.push("/signin");
  };
  if (!hasHydrated) {
    return null;
  }
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
          <li>
            <button 
              onClick={token ? handleLogoutClick : handleLoginClick}
              className="rounded-md border border-black px-4 text-white hover:text-[#D94E66] hover:bg-white"
            >
              {token ? "Logout" : "Login"} 
            </button>
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
            className={`cursor-pointer ${pathname === "/adopt" ? "text-[#D94E66]" : "text-black hover:text-[#D94E66]"}`}
            onClick={() => handleClick("/shelter-staff")}
          >
            Request Create Pet
          </li>
          <li
            className={`cursor-pointer ${pathname === "/adopt" ? "text-[#D94E66]" : "text-black hover:text-[#D94E66]"}`}
            onClick={() => handleClick("/pet-management")}
          >
            PET MANAGEMENT
          </li>
          <li
            className={`cursor-pointer ${pathname === "/donate" ? "text-[#D94E66]" : "text-black hover:text-[#D94E66]"}`}
            onClick={() => handleClick("/healthcheck")}
          >
            HEALTH-CHECK
          </li>
          <li
            className={`cursor-pointer ${pathname === "/adoptable-management" ? "text-[#D94E66]" : "text-black hover:text-[#D94E66]"}`}
            onClick={() => handleClick("/adoptable-management")}
          >
            ADOPTABLE MANAGEMENT
          </li>

         

         

        </ul>
      </div>
    </div>
  );
};

export default Header2;