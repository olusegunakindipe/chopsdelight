import React from "react";
import Image from "next/image";
import { IAsset, ILayoutConfig } from "@/interfaces/layoutInterfaces";

interface Props {
  logo?: IAsset;
  layout: ILayoutConfig;
}
function Header({ layout, logo }: Props) {
  return (
    <header className="bg-slate-200 relative lg:h-32">
      <div className="flex justify-between items-center lg:mx-16 mx-8">
        <Image
          src={`${logo?.asset.asset.url}`}
          alt="logo"
          width={100}
          height={20}
          className=""
        />
        <div className="flex items-center gap-4">
          <div className="flex relative items-center">
            <input
              placeholder="Search ..."
              className="pl-4 py-2 rounded-2xl relative border border-1 border-black"
            />
            <svg
              className="absolute right-2"
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
            <svg
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
