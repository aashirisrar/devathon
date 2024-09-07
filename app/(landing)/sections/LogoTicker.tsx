"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/public/assets/logo-acme.png";
import quantumLogo from "@/public/assets/logo-quantum.png";
import echoLogo from "@/public/assets/logo-echo.png";
import celestialLogo from "@/public/assets/logo-celestial.png";
import pulseLogo from "@/public/assets/logo-pulse.png";
import apexLogo from "@/public/assets/logo-apex.png";

export const LogoTicker = () => {
  return (
    <div className="xl:px-96 px-5 py-8 md:py-12 bg-white">
      <div className="flex  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          className="flex gap-14 flex-none pr-14 *:h-8 *:w-auto"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image src={acmeLogo} alt="acme Logo" />
          <Image src={quantumLogo} alt="quantum Logo" />
          <Image src={echoLogo} alt="echo Logo" />
          <Image src={celestialLogo} alt="celestial Logo" />
          <Image src={pulseLogo} alt="pulse Logo" />
          <Image src={apexLogo} alt="apex Logo" />
          {/* second set */}
          <Image src={acmeLogo} alt="acme Logo" />
          <Image src={quantumLogo} alt="quantum Logo" />
          <Image src={echoLogo} alt="echo Logo" />
          <Image src={celestialLogo} alt="celestial Logo" />
          <Image src={pulseLogo} alt="pulse Logo" />
          <Image src={apexLogo} alt="apex Logo" />
        </motion.div>
      </div>
    </div>
  );
};
