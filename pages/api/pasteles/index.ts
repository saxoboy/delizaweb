import type { NextApiRequest, NextApiResponse } from "next";
import MPastel, { IPastelModel } from "@models/Pastel";
import { db } from "database";

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
      data: IPastelModel[];
    };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getPastels(req, res);

    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getPastels = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { categoria, limit } = req.query;

  let condition = {};

  if (!categoria) {
    condition = {};
  }

  if (categoria) {
    condition = { categoria };
  }

  await db.connect();
  const pasteles = await MPastel.find(condition)
    .sort({ createdAt: "desc" })
    .select("titulo slug descripcion categorias createdAt")
    .lean() // para que no me traiga el objeto completo
    .limit(Number(limit))
    .slice("0", 10)
    .exec()
    .finally(() => db.disconnect());

  if (pasteles.length === 0) {
    res.status(200).json({ message: "No hay pasteles" });
  } else {
    const meta = {
      totalCount: pasteles.length,
      perPage: Number(limit),
      pageCount: pasteles.length / Number(limit),
      currentPage: 1,
    };

    return res.status(200).json({ message: "ok", meta, data: pasteles });
  }
};
