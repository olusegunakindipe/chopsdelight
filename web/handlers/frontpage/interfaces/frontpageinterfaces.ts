import { IAsset } from "@/interfaces/layoutInterfaces";

export interface IFrontpage {
  banner: IBanner;
  recipe: IRecipe;
  title: string;
}

export interface IBanner {
  image: IAsset;
  _type?: string;
}

export interface IRecipe {
  content: IContent[];
}
export interface IContent {
  image: IAsset;
  description: string;
  _key?: string;
}
