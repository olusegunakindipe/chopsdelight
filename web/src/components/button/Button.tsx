import React, { PropsWithChildren } from "react";
import cn from "classnames";

type ButtonType = "primary" | "secondary" | "light";

interface Props extends PropsWithChildren {
  type: ButtonType;
  className?: string;
}

const Button = ({ type, className, children }: Props) => {
  const buttonClasses = `p-2 cursor-pointer rounded-full ${
    type === "primary"
      ? "bg-[#297fca] text-white text-lg"
      : type === "secondary"
      ? "bg-gray-300 text-gray-800"
      : "bg-white text-gray-800"
  }`;

  return <button className={cn(buttonClasses, className)}>{children}</button>;
};

export default Button;
