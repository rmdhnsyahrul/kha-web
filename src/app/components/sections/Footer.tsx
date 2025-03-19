import Image from "next/image";
import Link from "next/link";
import React from "react";
import kha from "../../../../public/images/kha-logo2x.png";
import linkedIn from "../../../../public/images/linkedin.svg";
import fb from "../../../../public/images/facebook.svg";
import ig from "../../../../public/images/instagram.svg";
import { getDictionary } from "@/get-dictionary";

export default function Footer({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) {
  return (
    <section id="footer">
      <div className="bg-[#F6F6F6] flex flex-col gap-y-8 sm:flex-row items-center justify-between py-4 px-10">
        <Image
          src={kha}
          alt="kha mine management system"
          width={237}
          height={62}
          unoptimized
        />
        <div className="grid grid-flow-col text-primary-blue gap-x-[28px]">
          <Link href="">
            <Image
              src={linkedIn}
              alt="Instagram - kha mine management system"
              width={32}
              height={33}
              unoptimized
            />
          </Link>
          <Link href="">
            <Image
              src={fb}
              alt="Facebook - kha mine management system"
              width={32}
              height={33}
              unoptimized
            />
          </Link>
          <Link href="">
            <Image
              src={ig}
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
          <h3 className="text-2xl font-bold">{dictionary.information}</h3>
          <p className="text-wrap text-base">{dictionary.address}</p>
          <p className="text-wrap text-base">{dictionary.phone}</p>
          <p className="text-wrap text-base">{dictionary.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 text-[#F2F2F2] text-sm/4 p-[10px]">
          <div className="flex flex-col gap-y-[16px]">
            <h5 className="font-bold">{dictionary["about-kha"]}</h5>
            <Link href={""}>{dictionary["company-profile"]}</Link>
            <Link href={""}>{dictionary.career}</Link>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <h5 className="font-bold">{dictionary["knowledge-center"]}</h5>
            <Link href={""}>{dictionary.brochures}</Link>
            <Link href={""}>{dictionary.services}</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#181818] flex flex-col sm:flex-row justify-center py-6">
        <h5 className="text-sm text-[#F2F2F2] flex-col text-center sm:flex-row">
          © 2025 - KHA All Rights Reserved.
        </h5>
        <h5 className="text-sm text-[#F2F2F2] flex-col text-center sm:flex-row">
          &nbsp;Development By : KHA
        </h5>
      </div>
    </section>
  );
}
