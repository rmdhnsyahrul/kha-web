"use client";
import { PrimaryButton } from "@/app/components/button";
import { ChevronUp, Hamburger } from "@/app/components/icons";
import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../../../public/images/kha-logo2x.png";
import LocaleSwitcher from "./locale-switcher";

export default function MainNavigation({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["navigation"];
  lang: string;
}) {
  const mainNav = [
    [dictionary.home, ""],
    [dictionary.about, "about-us"],
    [dictionary.our_technology, "our-technology"],
    [dictionary.services, "our-services"],
    [dictionary.faq, "faq"],
  ];

  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const onPressMenu = useCallback(() => {
    // toggle show/hide mobile menu
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const [activeSection, setActiveSection] = useState("");
  const handleMenuPressed = useCallback(
    (menu: string) => {
      setIsActive(menu ? true : false);
      router.replace(`#${menu}`);
      const element = document.getElementById(menu);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onPressMenu();
    },
    [onPressMenu, router]
  );

  const onScroll = useCallback(() => {
    if (window.scrollY > 120) {
      setIsActive(true);
      if (window.scrollY > 688 && window.scrollY < 1400) {
        setActiveSection("about-us");
      } else if (window.scrollY >= 1400 && window.scrollY < 3030) {
        setActiveSection("our-technology");
      } else if (window.scrollY >= 3030 && window.scrollY < 6610) {
        setActiveSection("our-services");
      } else if (window.scrollY > 6610 && window.scrollY < 7525) {
        setActiveSection("faq");
      } else if (window.scrollY > 7525) {
        setActiveSection("contact-us");
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
  return (
    <div
      className={`main-nav fixed top-0 w-full z-20  ${
        isActive
          ? "bg-white drop-shadow-md -motion-translate-y-in-100 motion-duration-[3s] motion-ease-spring-smooth"
          : "bg-transparent"
      }`}
    >
      <div
        className={`header flex flex-row w-full px-4 sm:px-0 sm:w-[90%] items-center justify-between sm:m-auto py-4 -motion-translate-y-in-100 motion-duration-[3s] delay-300 ${
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
              src={logo}
              alt="kha mine management system"
              width={275}
              height={72}
              className="w-[177px] h-47px sm:w-[275px] sm:h-[72px]"
              unoptimized
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
                  <Link href={`#${url}`}>{label}</Link>
                  {/* <button onClick={() => handleMenuPressed(url)}>
                    {label}
                  </button> */}
                </li>
              ))}
            </ul>
          </nav>
          <Link href={"#contact-us"}>
            <PrimaryButton>{dictionary["request-demo"]}</PrimaryButton>
          </Link>
          <span className="flex gap-2 text-sm">
            <LocaleSwitcher lang={lang} />
          </span>
        </div>
        <span className="flex gap-2 text-sm sm:hidden">
          <LocaleSwitcher lang={lang} />
        </span>
      </div>
      {isMenuOpen && (
        <div
          className={`menu !visible sm:hidden p-4 bg-white fixed inset-0 w-screen h-screen`}
        >
          <div className="absolute right-4">
            <button
              onClick={onPressMenu}
              className="flex items-center justify-center p-4 bg-slate-400 rounded-full self-end"
            >
              <span className="text-lg/3 text-center">X</span>
            </button>
          </div>
          <nav className="pt-8 bg-white ">
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
          <div className="flex items-center justify-between p-4 pr-0 bg-white ">
            <span className="flex gap-2 text-sm sm:hidden">
              <Link href={""} className="font-bold underline">
                EN
              </Link>
              |<Link href={""}>ID</Link>
            </span>
            <button onClick={() => handleMenuPressed("contact-us")}>
              <PrimaryButton>Request Demo</PrimaryButton>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
