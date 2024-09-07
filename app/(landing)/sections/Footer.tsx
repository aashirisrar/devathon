import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

import Logo from "@/public/assets/logosaas.png";

export const Footer = () => {
  return (
    <section className="xl:px-96 lg:px-20 py-[40px] px-5 leading-5 text-[14px] text-[#BCBCBC]">
      <div className="flex flex-col items-center justify-center gap-6">
        <Link
          href={"#"}
          className="relative inline-flex before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute"
        >
          <Image
            alt="logo-footer"
            className="relative"
            width={40}
            height={40}
            src={Logo}
          />
        </Link>
        <div className="flex flex-row items-center justify-center gap-6 text-[14px] leading-[20px]">
          <Link href="#">About</Link>
          <Link href="#product">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="#">
            <BsTwitter className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsInstagram className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsLinkedin className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsPinterest className="w-6 h-6" />
          </Link>
          <Link href="#">
            <BsYoutube className="w-6 h-6" />
          </Link>
        </div>
        <div>© 2024 Patient Inc. All rights reserved.</div>
      </div>
    </section>
  );
};
