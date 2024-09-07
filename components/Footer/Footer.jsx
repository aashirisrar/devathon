import React from 'react';
import gpt3Logo from '../../public/assets/ai.png';
import Image from "next/image"

const INFO = ({ p1, p2, p3, p4 }) => (
  <div className="flex flex-col items-start ml-4 mb-4">
    <p className="text-sm text-white mb-1">{p1}</p>
    <p className="text-sm text-white mb-1">{p2}</p>
    <p className="text-sm text-white mb-1">{p3}</p>
    {p4 && <p className="text-sm text-white">{p4}</p>}
  </div>
);

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 py-12 px-4">
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Do you want to step into the future before others
        </h1>
      </div>

      <button className="bg-transparent border border-white py-2 px-8 mb-24 text-white font-semibold text-lg hover:bg-black transition-colors duration-300">
        Request Early Access
      </button>

      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-5xl text-left">
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <Image src={gpt3Logo} alt="gpt3_logo" className="w-28 h-8 mb-4" />
          <p className="text-sm text-white">
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div>
            <h4 className="text-lg text-white font-semibold mb-4 ml-4">Links</h4>
            <INFO p1="Overons" p2="Social Media" p3="Counters" p4="Contact" />
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4 ml-4">Company</h4>
            <INFO p1="Terms & Conditions" p2="Privacy Policy" p3="Contact" />
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4 ml-4">Get in touch</h4>
            <INFO p1="Crechterwoord K12 182 DK Alknjkcb" p2="0326-436106" p3="amazhmed123@gmail.com" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center w-full">
        <p className="text-xs text-white">&copy;2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
