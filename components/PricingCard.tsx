"use client";

import { cn } from "@/lib/utils";

import { BiCheck } from "react-icons/bi";
import Button from "./Button";
import Tag from "./Tag";

interface PricingCardProps {
  popular?: boolean;
  data: {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ data, popular }) => {
  return (
    <div
      key={data.title}
      className={cn(
        "w-[320px] shadow-md p-10 rounded-3xl border border-[#F1F1F1]",
        popular ? "bg-black" : ""
      )}
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between">
          <div
            className={cn(
              "leading-[28px] tracking-tighter font-bold text-[18px] text-[#000000]/50",
              popular ? "text-white/50" : ""
            )}
          >
            {data?.title}
          </div>
          {popular && <Tag popular title="Most Popular" />}
        </div>
        <div className="inline-flex items-end gap-1">
          <div
            className={cn(
              "font-bold text-4xl leading-[36px] tracking-tighter",
              popular ? "text-white" : ""
            )}
          >
            ${data?.monthlyPrice}
          </div>
          <span
            className={cn(
              "text-[16px] font-bold tracking-tight leading-6 text-[#000000]/50",
              popular ? "text-white/50" : ""
            )}
          >
            /month
          </span>
        </div>
        <div>
          <Button
            className="w-full bg-white text-black"
            title={popular ? "Sign up now" : "Get for free"}
            onClick={() => {}}
          />
        </div>
      </div>
      <div
        className={cn(
          "pt-[32px] flex flex-col justify-center gap-5",
          popular ? "text-white" : ""
        )}
      >
        {data.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <BiCheck className="w-6 h-6" />
            <span className="text-[14px] leading-5">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
