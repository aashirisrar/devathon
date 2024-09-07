"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TagProps {
  title: string;
  popular?: boolean;
}

const Tag: React.FC<TagProps> = ({ title, popular }) => {
  return (
    <motion.div
      animate={{
        backgroundPositionX: "-100%",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: 1,
      }}
      className={cn(
        "leading-5 font-medium text-sm tracking-tight border border-[#222222]/10 inline-flex px-3 py-1 rounded-[8px]",
        popular
          ? "bg-clip-text text-transparent bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] border-white/20"
          : ""
      )}
    >
      {title}
    </motion.div>
  );
};

export default Tag;
