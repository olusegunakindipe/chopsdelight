import { ILandinpage, ILink } from "src/interfaces/layoutInterfaces";
import React from "react";

interface Props {
  data?: ILandinpage;
}
function DynmaicMobileMenu({ data }: Props) {
  return (
    <div className="md:flex md:relative md:gap-12 md:pt-8">
      {data?.menuItems?.map((item, i) => (
        <div key={i} className="px-4 mb-4 border-l-2 border-[#297fca]">
          <div className="text-2xl uppercase font-bold">{item?.title}</div>
          <div className="pt-4 pb-0 flex flex-col">
            {item?.links?.map((link: ILink) => (
              <a key={link._key} className="pt-2 hover:underline" href="">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynmaicMobileMenu;
