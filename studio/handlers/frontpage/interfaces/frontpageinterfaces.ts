import { IAsset } from "@/interfaces/layoutInterfaces";

export interface IFrontpage {
  content: IFrontpageContent;
  title: string;
}

export interface IFrontpageContent {
  image: IAsset;
}
