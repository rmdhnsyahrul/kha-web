import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section id="footer">
      <div className="bg-[#F6F6F6] flex flex-col gap-y-8 sm:flex-row items-center justify-between py-4 px-10">
        <Image
          src={"./images/kha-logo2x.png"}
          alt="kha mine management system"
          width={237}
          height={62}
          unoptimized
        />
        <div className="grid grid-flow-col text-primary-blue gap-x-[28px]">
          <Link href="">
            <Image
              src={"./images/linkedin.svg"}
              alt="Instagram - kha mine management system"
              width={32}
              height={33}
              unoptimized
            />
          </Link>
          <Link href="">
            <Image
              src={"./images/facebook.svg"}
              alt="Facebook - kha mine management system"
              width={32}
              height={33}
              unoptimized
            />
          </Link>
          <Link href="">
            <Image
              src={"./images/instagram.svg"}
              alt="Linkedin - kha mine management system"
              width={32}
              height={33}
              unoptimized
            />
          </Link>
        </div>
      </div>
      <div className="bg-primary-blue flex flex-col gap-y-8 sm:flex-row justify-between py-6 px-10 font-poppins">
        <div className="grid grid-flow-row gap-y-6 text-[#F2F2F2] max-w-3xl ">
          <h3 className="text-2xl font-bold">Information</h3>
          <p className="text-wrap text-base">
            SOHO Pancoran Tower Splendor Lt.18 Unit 1817, Jl. Letjen M.T.
            Haryono.Kav. 2-3, RT.1/RW.6, Tebet Bar., Kec. Tebet, Soho, Kec.
            Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810
            Jakarta Selatan
          </p>
          <p className="text-wrap text-base">+6281288881461</p>
          <p className="text-wrap text-base">info@kha.co.id</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 text-[#F2F2F2] text-sm/4 p-[10px]">
          <div className="flex flex-col gap-y-[16px]">
            <h5 className="font-bold">About KHA</h5>
            <Link href={""}>Company Profile</Link>
            <Link href={""}>Career</Link>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <h5 className="font-bold">Knowledge Center</h5>
            <Link href={""}>Brochures</Link>
            <Link href={""}>Services</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#181818] flex justify-center py-6">
        <h5 className="text-sm text-[#F2F2F2]">
          © 2025 - KHA All Rights Reserved. Development By : KHA
        </h5>
      </div>
    </section>
  );
}
