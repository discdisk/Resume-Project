// import { Item } from "./item.model";
export interface Section {
  sectionTitle: string;
  items: Item[];
}
export interface Item {
  title: string;
  when: string;
  what: string;
  where: string;
  descriptions: string[];
}
