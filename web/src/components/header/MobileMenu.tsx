import { IHeaderNavigation } from "/interfaces/layoutInterfaces";
import React, { useRef, useState } from "react";
import DynmaicMobileMenu from "./DynamicMenu";

interface Props {
  items?: IHeaderNavigation[];
}

const MobileMenu = ({ items }: Props) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (title: string) => {
    setOpenItems((prevOpenItems) => ({
      [title]: !(title in prevOpenItems) || !prevOpenItems[title],
    }));
  };
  return (
    <ul className="min-h-[200px]">
      {items?.map((item, i) => (
        <React.Fragment key={i}>
          <li id={item.title} className="bg-white">
            <div
              ref={ref}
              onClick={() => handleToggle(item.title)}
              className="relative cursor-pointer w-full"
            >
              <div className="flex justify-between items-center py-4 px-8 relative">
                <p>{item.title}</p>
                <div
                  className={`${
                    openItems[item.title] && "toggle-mobile-card"
                  } ${
                    item.landingpage?.menuItems &&
                    "transition-all rounded duration-500 after:transition-all after:duration-500 bg-black h-1 w-6 after:content-[''] after:bg-black after:w-1 after:h-6 after:absolute after:translate-x-2.5 after:-translate-y-2.5 after:rounded"
                  }`}
                ></div>
              </div>
            </div>

            <div
              className={`relative mx-8 max-h-0 overflow-hidden ${
                openItems[item.title] && "max-h-full"
              }`}
            >
              <DynmaicMobileMenu data={item.landingpage} />
            </div>
          </li>
          <hr className=" border-0 bg-gray-400 w-11/12 mx-auto h-0.5 last-of-type:invisible" />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MobileMenu;
