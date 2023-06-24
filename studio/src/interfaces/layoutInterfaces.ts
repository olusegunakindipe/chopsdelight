export interface ILayoutConfig {
  title: string;
  logo: IAsset;
  headerNavigation?: IHeaderNavigation;
  footerNavigation?: IFooterNavigation;
  footerLogo?: IAsset;
  activeMenuItem?: string;
}

export interface IHeaderNavigation {
  slug?: string;
  title: string;
  SubmenuItems?: ISubmenuItems;
}

export interface IFooterNavigation {}

export interface ISubmenuItems {}

export interface IAsset {
  _type: string;
  alt: string;
  asset: ImageAsset;
}

export interface ImageAsset {
  asset: ImageData;
}
export interface ImageData {
  url?: string;
  originalFileName?: string;
  _type?: string;
}
