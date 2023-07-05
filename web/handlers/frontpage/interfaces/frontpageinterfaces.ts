import { IAsset } from "@/interfaces/layoutInterfaces";

export interface IFrontpage {
  banner: IBanner;
  title: string;
}

export interface IBanner {
  image: IAsset;
  _type?: string;
}
