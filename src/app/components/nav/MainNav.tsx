"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../button";
import { ChevronUp, Hamburger } from "../icons";

const mainNav = [
  ["Home", ""],
  ["About", "about-us"],
  ["Our Technology", "our-technology"],
  ["Services", "our-services"],
];

export default function MainNav() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onScroll = useCallback(() => {
    console.info(window.scrollY);
    if (window.scrollY > 120) {
      setIsActive(true);
      if (window.scrollY > 688 && window.scrollY < 1460) {
        setActiveSection("about-us");
      } else if (window.scrollY > 1460 && window.scrollY < 3925) {
        setActiveSection("our-technology");
      } else if (window.scrollY > 3925) {
        setActiveSection("our-services");
      }
    } else {
      setIsActive(false);
      setActiveSection("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  const onPressMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  /** Todo:
   * 1. close mobile menu after press menu
   */
  const [activeSection, setActiveSection] = useState("");
  const handleMenuPressed = useCallback((menu: string) => {
    setActiveSection(menu);
    onPressMenu();
    router.replace(`#${menu}`);
  }, []);

  return (
    <div
      className={`main-nav fixed top-0 w-full transition duration-300 ease-in-out z-10 ${
        isActive ? "bg-white" : "bg-transparent"
      }`}
    >
      <div
        className={`header flex flex-row w-full px-4 sm:px-0 sm:w-[90%] items-center justify-between sm:m-auto py-4 ${
          !isActive ? "fixed top-0 sm:right-[5%] " : ""
        }`}
      >
        <div className="flex flex-row gap-4 items-center">
          <button
            className="hamburger-menu sm:hidden !visible"
            onClick={onPressMenu}
          >
            {!isMenuOpen ? <Hamburger /> : <ChevronUp />}
          </button>
          <div className="logo">
            <Image
              src={"/images/kha-logo2x.png"}
              alt="kha mine management system"
              width={275}
              height={72}
              className="w-[177px] h-47px sm:w-[275px] sm:h-[72px]"
            />
          </div>
        </div>
        <div className="menu justify-center items-center gap-6 hidden sm:flex">
          <nav>
            <ul className="flex gap-6 ps-[10px] text-[#323B60]">
              {mainNav.map(([label, url]) => (
                <li
                  className={`py-2 ${
                    activeSection == url
                      ? "border-b-[2px] border-[#323B60] font-bold"
                      : "font-light"
                  }`}
                  key={label}
                >
                  <button onClick={() => handleMenuPressed(url)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <PrimaryButton>
            <Link href={"#contact-us"}>Request Demo</Link>
          </PrimaryButton>
          <span className="flex gap-2 text-sm">
            <Link href={""} className="font-bold underline">
              EN
            </Link>
            |<Link href={""}>ID</Link>
          </span>
        </div>
        <span className="flex gap-2 text-sm sm:hidden">
          <Link href={""} className="font-bold underline">
            EN
          </Link>
          |<Link href={""}>ID</Link>
        </span>
      </div>
      {isMenuOpen && (
        <div
          className={`menu !visible sm:hidden p-4 bg-white fixed inset-1 top-0 right-0 left-0`}
        >
          <div className="absolute right-4">
            <button
              onClick={onPressMenu}
              className="flex items-center justify-center p-4 bg-slate-400 rounded-full self-end"
            >
              <span className="text-lg/3 text-center">X</span>
            </button>
          </div>
          <nav className="pt-8">
            <ul className="gap-6 ps-[10px] text-[#323B60]">
              {mainNav.map(([label, url]) => (
                <li
                  className={`py-2 ${
                    activeSection == url
                      ? "border-b-[2px] border-[#323B60] font-bold"
                      : "font-light"
                  }`}
                  key={label}
                >
                  <button onClick={() => handleMenuPressed(url)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center justify-between p-4 pr-0">
            <span className="flex gap-2 text-sm sm:hidden">
              <Link href={""} className="font-bold underline">
                EN
              </Link>
              |<Link href={""}>ID</Link>
            </span>
            <PrimaryButton>
              <button onClick={() => handleMenuPressed("contact-us")}>
                Request Demo
              </button>
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
