import type { NextApiRequest, NextApiResponse } from "next";
import MPastel, { IPastelModel } from "@models/Pastel";
import { db } from "database";

type Data =
  | { message: string }
  | {
      message: string;
      data: IPastelModel[];
    };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getPastelesBySlug(req, res);
    default:
      return res.status(400).json({ message: "Method not allowed" });
  }
}

const getPastelesBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { slug } = req.query;

  const pastel = await MPastel.find({ slug })
    .exec()
    .finally(() => db.disconnect());

  if (pastel.length === 0) {
    res.status(200).json({ message: "No existe pasteles" });
  } else {
    return res.status(200).json({ message: "ok", data: pastel });
  }
};
