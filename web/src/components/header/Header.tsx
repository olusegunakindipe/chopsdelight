import React, { useState, useRef } from "react";
import Image from "next/image";
import { IAsset, ILayoutConfig } from "@/interfaces/layoutInterfaces";
import MobileMenu from "./MobileMenu";

interface Props {
  logo?: IAsset;
  layout: ILayoutConfig;
}
function Header({ layout, logo }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const handleToggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    hamburgerRef?.current?.classList.toggle("toggle-menu-button");
  };
  return (
    <header className="relative">
      <div className="bg-white shadow-md absolute z-10 flex justify-between w-full lg:h-32 items-center px-8 lg:px-16 ">
        <Image
          src={`${logo?.asset.asset.url}`}
          alt="logo"
          width={100}
          height={20}
          priority
          className="cursor-pointer"
        />
        <div className="flex items-center gap-4">
          <div className="flex relative items-center">
            <input
              placeholder="Search ..."
              className="cursor-pointer pl-4 py-2 rounded-2xl relative border border-1 border-black"
            />
            <svg
              className="absolute right-2 cursor-pointer"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="32px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
          </div>

          <div className="md:hidden">
            <button
              ref={hamburgerRef}
              className=" relative flex items-center justify-center w-8 h-8 rounded-md cursor-pointer"
              onClick={handleToggleMenu}
            >
              <div
                className="transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500 bg-black w-8 h-1 absolute top-4 -mt-0.5 rounded before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-2
            after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:translate-y-2 after:-translate-x-4"
              ></div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "top-24" : "top-[-490px]"
        } md:hidden z-0 absolute w-full transition-all duration-700 ease-in-out`}
      >
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
