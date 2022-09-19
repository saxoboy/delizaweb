import { db } from ".";
import MPastel from "@/models/Pastel";
import { IPastel } from "@/interfaces/pastel";

interface PastelSlug {
  slug: string;
}

export const getPastelBySlug = async (
  slug: string
): Promise<IPastel | null> => {
  await db.connect();
  const pastel = await MPastel.findOne({ slug })
    .lean()
    .exec()
    .finally(() => db.disconnect());

  if (!pastel) {
    return null;
  } else {
    return JSON.parse(JSON.stringify(pastel));
  }
};

export const getAllPastelSlugs = async (): Promise<PastelSlug[]> => {
  await db.connect();
  const pastelSlug = await MPastel.find()
    .select("slug")
    .lean()
    .exec()
    .finally(() => db.disconnect());

  return pastelSlug;
};
