"use client";

import Link from "next/link";
import Image from "next/image";
import { Option } from "@prisma/client";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProfilePageClientProps {
  options?: Option | null;
}

const ProfilePageClient: React.FC<ProfilePageClientProps> = ({ options }) => {
  let theme = "";
  let button = "";
  let heading = "";
  let bodyText = "";
  let link = "";
  let buttonVariant = "";
  let cardBackground = "";

  if (options?.theme === "Default") {
    theme = "bg-bermuda text-card-foreground";
    button = "bg-teal-500 text-white hover:bg-teal-500/90";
    heading = "text-teal-500";
    bodyText = "text-white";
    link = "hover:text-white/70";
    buttonVariant = "outline";
    cardBackground = "bg-[#20293d]";
  } else if (options?.theme === "Blue") {
    theme = "bg-[#023E8A] text-card-foreground";
    button = "bg-[#48CAE4] text-white hover:bg-[#23b4ab]";
    heading = "text-[#48CAE4]";
    bodyText = "text-white";
    link = "hover:text-white/70";
    buttonVariant = "outline";
  } else if (options?.theme === "Green") {
    theme = "bg-[#264653] text-card-foreground";
    button = "bg-[#2A9D8F] text-white hover:bg-[#23b4ab]";
    heading = "text-[#2A9D8F]";
    bodyText = "text-white";
    link = "hover:text-white/70";
    buttonVariant = "outline";
  } else {
    theme = "bg-gray-200";
  }

  return (
    <div className={cn("pt-6", theme)}>
      {/* navbar */}
      {options?.navbar && (
        <div className="flex items-center lg:px-40 md:px-20 px-8 justify-between">
          <div className={cn("text-lg flex gap-2 items-center", bodyText)}>
            <Link href="#">{options?.navbarLogoText}</Link>
          </div>
          <div className={cn("hidden text-lg md:flex gap-14", bodyText)}>
            <Link href={options?.navbarLink1!!}>
              {options?.navbarLinkText1}
            </Link>
            <Link href={options?.navbarLink2!!}>
              {options?.navbarLinkText2}
            </Link>
            <Link href={options?.navbarLink3!!}>
              {options?.navbarLinkText3}
            </Link>
          </div>
          <div className="flex justify-end">
            <div className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <div className="relative">
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  <li>
                    <Link
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        button
                      )}
                      href={options?.resumeLink!!}
                      target="_blank"
                    >
                      {options?.resumeText}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* body */}
      {options?.hero && (
        <div className="w-full mt-20 px-8 md:px-24">
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div>
              <h2 className={cn("text-4xl sm:text-6xl", heading)}>
                {options?.heroText}
              </h2>
            </div>
            <div>
              <h3 className={cn("text-xl sm:text-2xl font-light", bodyText)}>
                {options?.heroTagText}
              </h3>
            </div>
            <div>
              <h4
                className={cn(
                  "lg:w-[36rem] md:w-[26rem] w-[16rem] text-center text-sm sm:text-lg mt-2 font-extralight",
                  bodyText
                )}
              >
                {options?.heroDescriptionText}
              </h4>
            </div>
            <div className="flex gap-6 mt-3">
              <Link
                target="_blank"
                href={options?.heroPrimaryButtonLink!!}
                className={cn(
                  "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                  button
                )}
              >
                {options?.heroPrimaryButtonText}
              </Link>
              <Link
                target="_blank"
                href={options?.heroSecondaryButtonLink!!}
                className={cn(
                  "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                  button
                )}
              >
                {options?.heroSecondaryButtonText}
              </Link>
            </div>
            {options?.heroImage && (
              <div className="mt-8 relative overflow-hidden w-48 h-48 sm:w-80 sm:h-80 rounded-full">
                <Image
                  fill
                  alt="Hero Image"
                  className="object-cover"
                  src={options?.heroImage!!}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {/* projects */}
      {options?.project && (
        <div className={cn("w-full mt-20", bodyText)}>
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div>
              <h2 className={cn("text-4xl sm:text-6xl", heading)}>
                {options?.projectSectionHeading}
              </h2>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-light">
                {options?.projectSectionTagText}
              </h3>
            </div>
            <div>
              <h4 className="lg:w-[36rem] md:w-[26rem] w-[16rem]  text-center text-sm sm:text-lg mt-2 font-extralight">
                {options?.projectSectionBodyText}
              </h4>
            </div>
          </div>
          <div className="px-8">
            <div className="text-white mt-12 flex justify-center gap-6 flex-wrap">
              <div
                className={cn(
                  "flex flex-col items-center text-center w-[24rem] p-6 sm:p-8 rounded-lg",
                  cardBackground
                )}
              >
                {options?.projectImage1 && (
                  <div className="relative overflow-hidden w-48 h-48 sm:w-80 sm:h-80 rounded-lg">
                    <Image
                      fill
                      alt="Project Image 1"
                      className="object-cover"
                      src={options?.projectImage1!!}
                    />
                  </div>
                )}
                <div className="my-6 text-xl">{options?.projectText1}</div>
                <div className="mb-8">{options?.projectBody1}</div>
                <Link
                  target="_blank"
                  href={options?.projectLink1!!}
                  className={cn(
                    "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                    button
                  )}
                >
                  View
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div
                className={cn(
                  "flex flex-col items-center text-center w-[24rem] p-6 sm:p-8 rounded-lg",
                  cardBackground
                )}
              >
                {options?.projectImage2 && (
                  <div className="relative overflow-hidden w-48 h-48 sm:w-80 sm:h-80 rounded-lg">
                    <Image
                      fill
                      alt="Project Image 2"
                      className="object-cover"
                      src={options?.projectImage2!!}
                    />
                  </div>
                )}
                <div className="my-6 text-xl">{options?.projectText2}</div>
                <div className="mb-8">{options?.projectBody2}</div>
                <Link
                  target="_blank"
                  href={options?.projectLink2!!}
                  className={cn(
                    "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                    button
                  )}
                >
                  View
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* footer */}
      {options?.footer && (
        <div className="mt-36 pb-12">
          <div
            className={cn(
              "flex flex-col gap-3 items-center text-center justify-center",
              bodyText
            )}
          >
            <h2 className={cn("text-4xl", heading)}>{options?.footerText}</h2>
            <div>
              <h4
                className={cn(
                  "lg:w-[36rem] md:w-[26rem] w-[16rem] text-center text-sm sm:text-lg mt-2 font-extralight",
                  bodyText
                )}
              >
                {options?.footerBodyText}
              </h4>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <Link
                href={options?.footerLinkText1!!}
                target="_blank"
                className={cn("cursor-pointer transition", link)}
              >
                {options?.footerLinkText1}
              </Link>
              <Link
                href={options?.footerLinkText2!!}
                target="_blank"
                className={cn("cursor-pointer transition", link)}
              >
                {options?.footerLinkText2}
              </Link>
              <Link
                href={options?.footerLinkText3!!}
                target="_blank"
                className={cn("cursor-pointer transition", link)}
              >
                {options?.footerLinkText3}
              </Link>
            </div>
            <div className={cn("text-center text-sm", bodyText)}>
              {options?.footerCopyrightText}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePageClient;
