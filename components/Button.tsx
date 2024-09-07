"use client";

import { cn } from "@/lib/utils";
import { BsArrowRight } from "react-icons/bs";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className,
  arrow,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "gap-1 bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight",
        className
      )}
    >
      {title}
      {arrow && (
        <span>
          <BsArrowRight />
        </span>
      )}
    </button>
  );
};

export default Button;
