import { IPastel } from "./pastel";

export interface ICategoria {
  _id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  imagenPortada: string;
  pasteles: IPastel[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoriaAll {
  data: ICategoria[];
  message: string;
  meta?: {
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
  };
}
