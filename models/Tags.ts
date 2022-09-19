import mongoose, { Model, Schema } from "mongoose";
import { ITag } from "@/interfaces";

export interface ITagModel extends ITag {}

const tagSchema = new Schema(
  {
    nombre: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    pastels: [{ type: Schema.Types.ObjectId, ref: "Pastel", required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

//creando indices
tagSchema.index({ nombre: "text" });

const MTag: Model<ITagModel> =
  mongoose.models.Tag || mongoose.model("Tag", tagSchema);

export default MTag;
