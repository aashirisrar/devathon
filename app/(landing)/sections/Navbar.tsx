"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

import useRegisterModal from "@/app/hooks/useRegisterModal";

import Logo from "@/public/assets/logosaas.png";
import Button from "@/components/Button";

const Navbar = () => {
  const registerModal = useRegisterModal();

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex justify-center items-center text-white bg-black py-3 text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Claim your page and boost your online presence
        </p>
        <button
          onClick={() => registerModal.onOpen()}
          className="inline-flex gap-1 items-center hover:text-white/70 transition"
        >
          <p>Get started for free</p>
          <BsArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </button>
      </div>
      <div className="xl:px-96 p-5 lg:px-20">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          </Link>
          <BiMenu className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <Link href="#">About</Link>
            <Link href="#product">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#">Help</Link>
            <Button
              title="Start for free"
              onClick={() => registerModal.onOpen()}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
