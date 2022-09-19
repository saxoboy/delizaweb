import type { NextApiRequest, NextApiResponse } from "next";
import MCategoria from "@models/Categoria";
import { db } from "database";
import { ICategoria } from "../../../../interfaces/categoria";

type Data =
  | { message: string }
  | {
      message: string;
      meta: {
        totalCount: number;
        perPage: number;
        pageCount: number;
        currentPage: number;
      };
      data: ICategoria[];
    };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getPastelesByCategoria(req, res);
    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getPastelesByCategoria = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { categoria, limit } = req.query;

  const categorias = await MCategoria.find({ categoria })
    .lean()
    .limit(Number(limit))
    .exec()
    .finally(() => db.disconnect());

  if (categorias.length === 0) {
    res.status(200).json({ message: "No hay pasteles" });
  } else {
    const meta = {
      totalCount: categorias.length,
      perPage: Number(limit),
      pageCount: categorias.length / Number(limit),
      currentPage: 1,
    };

    return res.status(200).json({
      message: "ok",
      meta,
      data: categorias,
    });
  }
};
