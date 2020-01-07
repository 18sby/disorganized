export interface IHomePageProps {
  author: string;
}

export interface ISubMenu {
  key: string;
  value: string;
}

export interface IHomePageState {
  leftMenu: ISubMenu[];
  leftMenuKeys: string[];
}