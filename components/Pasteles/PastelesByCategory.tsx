import Link from "next/link";
import Container from "../ui/Container";
import CategoryListCard from "./CategoryListCard";
import { ICategoria } from "../../interfaces/categoria";
import { useMemo } from "react";
import { getRandomArray } from "@/utils/getRandomArray";
import { useCategory } from "@/hooks/useCategory";
import FullScreenLoading from "../ui/FullScreenLoading";

const PastelesByCategory = () => {
  const { categories, isLoading, isError } = useCategory("/pasteles/categoria");

  const categoryPreview = useMemo(() => {
    const category = categories && getRandomArray(categories.data, 3);
    const algo = [...new Set(category)];
    return category && algo.map((item: ICategoria) => item);
  }, [categories]);

  return (
    <Container>
      <h2 className="mb-4 text-3xl text-center text-gray-700 md:text-4xl font-display lg:text-left">
        Tipos de pasteles
      </h2>
      <hr />
      <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 justify-items-center">
        {isLoading && <FullScreenLoading />}
        {isError && (
          <p className="py-12 text-center">
            Existe un error al cargar la base de datos
          </p>
        )}
        {categoryPreview?.map((item: ICategoria) => (
          <CategoryListCard key={item.slug} category={item} />
        ))}
        <div className="max-w-xs text-white transition duration-500 transform bg-purple-400 shadow-lg hover:bg-purple-600 rounded-xl hover:scale-105 hover:shadow-2xl">
          <Link href="/pasteles/categoria">
            <a className="flex items-center w-full h-full">
              <div className="px-6 py-4">
                <h3 className="pt-2 pb-4 text-2xl text-center font-display">
                  Ver todas las categorías
                </h3>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default PastelesByCategory;
