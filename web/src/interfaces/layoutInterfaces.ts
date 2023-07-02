export interface ILayoutConfig {
  title: string;
  logo: IAsset;
  headerNavigation?: IHeaderNavigation[];
  footerNavigation?: IFooterNavigation;
  footerLogo?: IAsset;
  activeMenuItem?: string;
}

export interface IHeaderNavigation {
  title: string;
  landingpage?: ILandinpage;
}

export interface IFooterNavigation {}

export interface ILandinpage {
  menuItems: IMenuItem[];
}
export interface IMenuItem {
  links: ILink[];
  title: string;
  slug: string;
}

export interface ILink {
  _key: string;
  title: string;
  externalLink: string;
  _type: string;
}

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
