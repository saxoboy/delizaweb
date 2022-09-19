import mongoose, { Model, Schema } from "mongoose";
import { ICategoria } from "interfaces";

export interface ICategoriaModel extends ICategoria {}

const categoriaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    descripcion: { type: String },
    imagenPortada: { type: String },
    pasteles: [{ type: Schema.Types.ObjectId, ref: "Pastel", required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

//creando indices
categoriaSchema.index({ nombre: "text" });

const MCategoria: Model<ICategoriaModel> =
  mongoose.models.Categoria || mongoose.model("Categoria", categoriaSchema);

export default MCategoria;
