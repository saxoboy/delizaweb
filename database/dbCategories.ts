import { db } from ".";
import MCategoria from "@/models/Categoria";
import { ICategoria } from "@/interfaces/categoria";

interface CategorySlug {
  slug: string;
}

export const getCategoryBySlug = async (
  slug: string
): Promise<ICategoria | null> => {
  await db.connect();
  const category = await MCategoria.findOne({ slug })
    .lean()
    .exec()
    .finally(() => db.disconnect());

  if (!category) {
    return null;
  } else {
    return JSON.parse(JSON.stringify(category));
  }
};

export const getAllCategorySlugs = async (): Promise<CategorySlug[]> => {
  await db.connect();
  const categorySlug = await MCategoria.find()
    .select("slug")
    .lean()
    .exec()
    .finally(() => db.disconnect());

  return categorySlug;
};
