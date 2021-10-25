import { FestivalElemObj } from "./FestivalElemObj"

export type ShortElemObj = {
  id: number;
  coverimg: string;
  genre: string;
  year: number;
  description: string;
  title: string;
  review:number[];
  festivals: FestivalElemObj[];

}