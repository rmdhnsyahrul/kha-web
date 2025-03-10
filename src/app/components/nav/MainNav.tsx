"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../button";
import { ChevronUp, Hamburger } from "../icons";

export default function MainNav() {
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onScroll = useCallback(() => {
    if (window.scrollY > 120) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pathname = usePathname();

  const onPressMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  /** Todo:
   * 1. close mobile menu after press menu
   */

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
              <li
                className={`py-2 ${
                  pathname == "/"
                    ? "border-b-[2px] border-[#323B60] font-bold"
                    : "font-light"
                }`}
              >
                <Link href={""}>Home</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={"#about-us"}>About</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={"#our-services"}>Our Technology</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={""}>Services</Link>
              </li>
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
              <li
                className={`py-2 ${
                  pathname == "/"
                    ? "border-b-[2px] border-[#323B60] font-bold"
                    : "font-light"
                }`}
              >
                <Link href={""}>Home</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={"#about-us"}>About</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={"#our-services"}>Our Technology</Link>
              </li>
              <li className="py-2 font-light">
                <Link href={""}>Services</Link>
              </li>
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
              <Link href={"#contact-us"}>Request Demo</Link>
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
