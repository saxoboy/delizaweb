import { NextPage } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryListCard from "@/components/Pasteles/CategoryListCard";
import FullScreenLoading from "@/components/ui/FullScreenLoading";
import Container from "@/components/ui/Container";
import MainLayout from "@/components/Layout/MainLayout";
import BreadcrumbImg from "@/public/img/breadcrumb.jpg";
import { useCategory } from "@/hooks/useCategory";
import { ICategoria } from "@/interfaces";

const CategoriaPage: NextPage = () => {
  const { categories, isLoading, isError } = useCategory("/pasteles/categoria");
  return (
    <MainLayout
      title={"Categoria Pasteles - Deliza Cake Art"}
      pageDescription={"Los mejores pasteles de fondant y crema"}
    >
      <Breadcrumb
        title="Categoria Pasteles"
        subtitle="Los mejores pasteles de fondant y crema"
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        image={BreadcrumbImg}
        overlay={false}
        gradient={true}
      />
      <Container>
        <h2 className="py-12 text-3xl text-center text-gray-700 md:text-5xl font-display">
          Tipos de pasteles - Tipos de pasteles
        </h2>
        {isError && <p> Error...</p>}
        {isLoading && <FullScreenLoading />}
        <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 justify-items-center">
          {!isLoading && categories?.message !== "ok" ? (
            <p>No existen Categorias</p>
          ) : null}
          {categories &&
            categories?.data.map((category: ICategoria) => (
              <CategoryListCard key={category.slug} category={category} />
            ))}
        </div>
      </Container>
    </MainLayout>
  );
};

export default CategoriaPage;
