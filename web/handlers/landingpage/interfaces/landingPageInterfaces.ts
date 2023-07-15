import { IMenuItem } from "src/interfaces/layoutInterfaces";

export interface ILandingPage {
  title: string;
  slug: string;
  menuItems: IMenuItem[];
}
