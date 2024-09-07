"use client";

import Image from "next/image";
import { Option } from "@prisma/client";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import Heading from "../HeroHeading";
import { Button } from "@/components/ui/button";

interface WebPreviewProps {
  options: Option | null;
}

const WebPreview: React.FC<WebPreviewProps> = ({ options }) => {
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
    <section className="mt-4">
      <Heading title="Page Preview" center />
      <div
        className={cn(
          "mt-6 overflow-y-auto h-[850px] flex flex-col rounded-lg border shadow-sm",
          theme
        )}
      >
        {/* navbar */}
        {options?.navbar && (
          <div className="flex items-center px-8 mt-6 justify-between">
            <div className={cn("text-lg flex gap-2 items-center", bodyText)}>
              <div className="cursor-pointer">{options?.navbarLogoText}</div>
            </div>
            <div className="flex justify-end">
              <div className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                <div className="relative">
                  <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                    <li>
                      <div
                        className={cn(
                          "cursor-pointer group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors  focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                          button
                        )}
                      >
                        {options?.resumeText}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* body */}
        {options?.hero && (
          <div className="w-full mt-14">
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
                    "w-[24rem] text-center text-sm sm:text-lg mt-2 font-extralight",
                    bodyText
                  )}
                >
                  {options?.heroDescriptionText}
                </h4>
              </div>
              <div className="flex gap-3 mt-3">
                <div
                  className={cn(
                    "text-sm rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                    button
                  )}
                >
                  {options?.heroPrimaryButtonText}
                </div>
                <div
                  className={cn(
                    "text-sm rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                    button
                  )}
                >
                  {options?.heroSecondaryButtonText}
                </div>
              </div>
              {options?.heroImage && (
                <div className="mt-4 relative overflow-hidden w-48 h-48 sm:w-80 sm:h-80 rounded-full">
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
          <div className={cn("w-full mt-12", bodyText)}>
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
                <h4 className="w-[24rem] text-center text-sm sm:text-lg mt-2 font-extralight">
                  {options?.projectSectionBodyText}
                </h4>
              </div>
              <div className="px-8">
                <div className="text-white mt-12 flex justify-center gap-6 flex-wrap">
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
                          alt="Project Image 1"
                          className="object-cover"
                          src={options?.projectImage1!!}
                        />
                      </div>
                    )}
                    <div className="my-6 text-xl">{options?.projectText1}</div>
                    <div className="mb-8">{options?.projectBody1}</div>
                    <div
                      className={cn(
                        "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                        button
                      )}
                    >
                      View
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
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
                          alt="Project Image 2"
                          className="object-cover"
                          src={options?.projectImage2!!}
                        />
                      </div>
                    )}
                    <div className="my-6 text-xl">{options?.projectText2}</div>
                    <div className="mb-8">{options?.projectBody2}</div>
                    <div
                      className={cn(
                        "rounded-lg p-2 px-3 flex transition items-center justify-center gap-1 cursor-pointer",
                        button
                      )}
                    >
                      View
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* footer */}
        {options?.footer && (
          <div className="mt-12 mb-8">
            <div
              className={cn(
                "flex flex-col gap-3 items-center text-center",
                bodyText
              )}
            >
              <h2 className={cn("text-4xl", heading)}>{options?.footerText}</h2>
              <div className="w-[24rem] text-sm sm:text-lg font-extralight">
                {options?.footerBodyText}
              </div>
              <div>
                <div className={cn("cursor-pointer transition", link)}>
                  {options?.footerLinkText1}
                </div>
                <div className={cn("cursor-pointer transition", link)}>
                  {options?.footerLinkText2}
                </div>
                <div className={cn("cursor-pointer transition", link)}>
                  {options?.footerLinkText3}
                </div>
              </div>
              <div className={cn("text-center text-sm", bodyText)}>
                {options?.footerCopyrightText}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WebPreview;
