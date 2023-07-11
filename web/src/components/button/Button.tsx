import React, { PropsWithChildren } from "react";
import cn from "classnames";

type ButtonType = "primary" | "secondary" | "light";

interface Props extends PropsWithChildren {
  type: ButtonType;
  className?: string;
  href?: string;
}

const Button = ({ type, className, children, href }: Props) => {
  const buttonClasses = `px-4 py-2 cursor-pointer ${
    type === "primary"
      ? "bg-[#297fca] text-white text-lg"
      : type === "secondary"
      ? "bg-gray-300 text-gray-800"
      : "bg-white text-gray-800"
  }`;
  if (href) {
    return (
      <a href={href} className={cn(buttonClasses, className)}>
        {children}
      </a>
    );
  }
  return <button className={cn(buttonClasses, className)}>{children}</button>;
};

export default Button;
