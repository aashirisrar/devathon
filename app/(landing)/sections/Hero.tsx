"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import useRegisterModal from "@/app/hooks/useRegisterModal";

import Button from "@/components/Button";
import Tag from "@/components/Tag";
import cogImage from "@/public/assets/cog.png";
import cylinderImage from "@/public/assets/cylinder.png";
import noodeImage from "@/public/assets/noodle.png";

export const Hero = () => {
  const registerModal = useRegisterModal();

  return (
    <section className="xl:px-96 lg:px-20 px-5 pt-8 md:pt-5 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="md:flex items-center">
        <div className="md:w-[478px] 2xl:w-[950px]">
          <Tag title="Early Access is here" />
          <div className="flex flex-col gap-6 pt-6">
            <div className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Easily Create Stunning Single Page Portfolios
            </div>
            <div className="text-[28px] text-[#010D3E] tracking-tight leading-7">
              Our SaaS platform empowers users to effortlessly showcase their
              work and achievements on a single page. Stand out from the crowd
              and impress potential clients and employers.
            </div>
          </div>
          <div className="flex gap-1 pt-[30px]">
            <Button
              onClick={() => registerModal.onOpen()}
              title="Start for free"
            />
            <Button
              className="bg-transparent text-black"
              onClick={() => {}}
              title="Learn More"
              arrow
            />
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <motion.img
            alt="cog image"
            src={cogImage.src}
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <Image
            src={cylinderImage}
            width={220}
            height={220}
            alt="cylinder image"
            className="hidden md:block -top-8 -left-32 md:absolute"
          />
          <Image
            src={noodeImage}
            width={220}
            alt="cylinder image"
            className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]"
          />
        </div>
      </div>
    </section>
  );
};
