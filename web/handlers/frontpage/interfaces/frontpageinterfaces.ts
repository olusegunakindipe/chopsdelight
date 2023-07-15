import { IAsset, ILink } from "/interfaces/layoutInterfaces";

export interface IFrontpage {
  banner: IBanner;
  recipe: IContents;
  occasion?: IContents;
  inspiration?: IInspiration;
  pastry?: IPastry;
  title: string;
}

export interface IBanner {
  image: IAsset;
  _type?: string;
}

export interface IContents {
  content: IContent[];
}

export interface IPastry {
  header?: string;
  content: IContent[];
}

export interface IContent {
  image: IAsset;
  description: string;
  _key?: string;
  header?: string;
  cta?: ILink;
}

export interface IInspiration {
  images?: IAsset[];
  description: string;
  header?: string;
  cta?: ILink;
}
