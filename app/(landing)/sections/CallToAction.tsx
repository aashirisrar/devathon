"use client";

import Image from "next/image";

import starImage from "@/public/assets/star.png";
import springImage from "@/public/assets/spring.png";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import useRegisterModal from "@/app/hooks/useRegisterModal";

export const CallToAction = () => {
  const registerModal = useRegisterModal();

  return (
    <section className="overflow-x-clip xl:px-96 lg:px-20 py-[96px] px-5 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div className="relative">
        <Heading
          heading="Sign up for free today"
          subHeading="With our SaaS, you can showcase all your work, achievements, and skills on a single page. Impress potential clients and employers with a visually stunning and organized portfolio that highlights your unique talents."
        />
        <Image
          src={starImage}
          width={360}
          height={360}
          alt="star Image"
          className="hidden md:block absolute -left-[250px] -top-[137px]"
        />
        <Image
          src={springImage}
          width={360}
          height={360}
          alt="spring Image"
          className="hidden md:block absolute -right-[231px] -top-[19px]"
        />
      </div>
      <div className="flex items-center justify-center gap-2 pt-[40px]">
        <Button onClick={() => registerModal.onOpen()} title="Start for free" />
        <Button
          className="bg-transparent text-black"
          onClick={() => {}}
          title="Learn More"
          arrow
        />
      </div>
    </section>
  );
};
