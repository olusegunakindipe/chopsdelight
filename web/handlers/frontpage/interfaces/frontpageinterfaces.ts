import { IAsset, ILink } from "@/interfaces/layoutInterfaces";

export interface IFrontpage {
  banner: IBanner;
  recipe: IRecipe;
  occasion?: IOccassion;
  title: string;
}

export interface IBanner {
  image: IAsset;
  _type?: string;
}

export interface IRecipe {
  content: IContent[];
}

export interface IOccassion {
  content: IContent[];
}

export interface IContent {
  image: IAsset;
  description: string;
  _key?: string;
  header?: string;
  cta?: ILink;
}
