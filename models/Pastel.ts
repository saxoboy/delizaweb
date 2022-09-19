import mongoose, { Model, Schema } from "mongoose";
import { IPastel } from "interfaces";

export interface IPastelModel extends IPastel {}

const pastelSchema = new Schema(
  {
    titulo: { type: String, required: [true, "el titulo es obligatorio"] },
    slug: { type: String, required: true, unique: true },
    descripcion: { type: String },
    imagenPortada: { type: String },
    photos: [{ type: String }],
    categorias: [
      { type: Schema.Types.ObjectId, ref: "Categoria", required: true },
    ],
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag", required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

//creando indices
pastelSchema.index({ titulo: "text", tags: "text" });

const MPastel: Model<IPastelModel> =
  mongoose.models.Pastel || mongoose.model("Pastel", pastelSchema);
export default MPastel;
