import { FestivalElemObj } from "./FestivalElemObj"

export type ShortElemObj = {
  id: number;
  title: string;
  genre: string,
  year: number,
  coverimg: string,
  review:number,
  description: string

  festivals: FestivalElemObj[];

}