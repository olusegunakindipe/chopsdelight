import React, { useState, useRef } from "react";
import Image from "next/image";
import { IAsset, ILayoutConfig } from "/interfaces/layoutInterfaces";
import MobileMenu from "./MobileMenu";
import Container from "../container/Container";
import DynamicMenu from "./DynamicMenu";
import Modal from "../modal/Modal";
import { isNullOrEmptyObject } from "src/helpers/genericHelpers";

interface Props {
  logo?: IAsset;
  layout: ILayoutConfig;
}
function Header({ layout, logo }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const { headerNavigation } = layout;
  const handleHamburgerMenu = () => {
    setOpen((prevOpen) => !prevOpen);
    hamburgerRef?.current?.classList.toggle("toggle-menu-button");
  };

  const handleNavMenu = (title: string) => {
    setOpenItems((prevOpenItems) => ({
      [title]: !(title in prevOpenItems) || !prevOpenItems[title],
    }));
  };

  const calculateTopValue = () => {
    const navbarHeight = navRef?.current?.offsetHeight;
    return navbarHeight || 0;
  };
  return (
    <header className="relative z-50">
      <>
        <div
          ref={navRef}
          className=" shadow-md grid grid-cols-[2fr,1fr] gap-4 justify-between items-center py-4 px-8 md:px-16"
        >
          <div className="w-full">
            <Image
              src={`${logo?.asset.asset.url}`}
              alt="logo"
              width={100}
              height={20}
              priority
              className="cursor-pointer xl:ml-40 w-24"
            />
          </div>
          <div className="flex items-center gap-4 justify-end">
            <div className="flex relative items-center">
              <input
                placeholder="Search ..."
                className="cursor-pointer pl-2 py-2 rounded-2xl relative border border-1 border-black md:w-full w-44"
              />
              <svg
                className="absolute right-2 cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
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
                className="relative flex items-center justify-center w-8 h-8 rounded-md cursor-pointer sm:-mr-2"
                onClick={handleHamburgerMenu}
              >
                <div
                  className="transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500 bg-black w-8 h-1 absolute top-4 -mt-0.5 rounded before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-2
            after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:translate-y-2 after:-translate-x-4"
                ></div>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#021d49] hidden md:block relative lg:scale-100">
          <Container className="">
            <ul className="flex gap-16 py-4 items-center text-white">
              {headerNavigation?.map((item, i) => (
                <React.Fragment key={i}>
                  <li
                    className="flex items-center gap-2 cursor-pointer"
                    onMouseEnter={() => handleNavMenu(item.title)}
                  >
                    <div className="w-full whitespace-nowrap hover:underline">
                      {item.title}
                    </div>
                    {item.landingpage?.menuItems && (
                      <div
                        className={`${
                          openItems[item.title]
                            ? "border-t-2 border-r-2 -rotate-45 mt-2"
                            : "border-b-2 border-r-2 rotate-45 mb-2"
                        } transform  w-4 h-3 `}
                      ></div>
                    )}
                  </li>
                  {openItems[item.title] &&
                    !isNullOrEmptyObject(item.landingpage?.menuItems) && (
                      <Modal onClose={() => handleNavMenu(item.title)}>
                        <div className="text-black">
                          <DynamicMenu data={item.landingpage} />
                        </div>
                      </Modal>
                    )}
                </React.Fragment>
              ))}
            </ul>
          </Container>
        </div>
      </>

      <div
        style={{ top: open ? `${calculateTopValue()}px` : "-490px" }}
        className="md:hidden z-10 absolute w-full transition-all duration-700 ease-in-out"
      >
        <MobileMenu items={headerNavigation} />
      </div>
    </header>
  );
}

export default Header;
