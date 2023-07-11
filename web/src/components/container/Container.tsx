import React, { PropsWithChildren } from "react";
import cn from "classnames";

interface Props extends PropsWithChildren {
  className?: string;
}

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        `mx-4 md:mx-4 lg:mx-12 xl:max-w-7xl xl:mx-auto `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
