import { ICategoria } from "./categoria";
import { ITag } from "./tag";

export interface IPastel {
  _id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  imagenPortada: string;
  photos: string;
  categorias: ICategoria[];
  tags?: ITag[];
  createdAt: Date;
  updatedAt: Date;
}
