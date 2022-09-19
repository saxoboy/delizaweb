import type { NextApiRequest, NextApiResponse } from "next";
import MCategoria, { ICategoriaModel } from "@models/Categoria";
import { db } from "database";

type Data =
  | { message: string }
  | {
      message: string;
      data: ICategoriaModel[];
    };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getCategoryBySlug(req, res);
    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getCategoryBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { slug } = req.query;
  const category = await MCategoria.find({ slug })
    .lean()
    .exec()
    .finally(() => db.disconnect());

  if (category.length === 0) {
    res.status(200).json({ message: "No existe categorias de pasteles" });
  } else {
    return res.status(200).json({ message: "ok", data: category });
  }
};
