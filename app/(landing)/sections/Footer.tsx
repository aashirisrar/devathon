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
    <section className="xl:px-96 lg:px-20 py-[40px] px-5 leading-5 text-[14px] text-black">
      <div className="flex flex-col items-center justify-center gap-6">
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
