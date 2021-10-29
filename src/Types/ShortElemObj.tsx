import { FestivalElemObj } from "./FestivalElemObj"

export type ShortElemObj = {
  id: number;
  coverimg: string;
  genre: string;
  year: number;
  description: string;
  title: string;
  producerID: string| undefined;
  producerName: string| undefined;
  review:number[];
  festivals: FestivalElemObj[];

}