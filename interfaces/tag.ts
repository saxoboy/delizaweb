import { IPastel } from "./pastel";

export interface ITag {
  _id: string;
  nombre: string;
  slug: string;
  pastels: IPastel[];
  createdAt: Date;
  updatedAt: Date;
}
