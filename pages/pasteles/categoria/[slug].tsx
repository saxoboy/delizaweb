import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dbCategories } from "@/database";
import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Container from "@/components/ui/Container";
import BreadcrumbImg from "@/public/img/breadcrumb.jpg";
import { ICategoria } from "../../../interfaces/categoria";
import { IPastel } from "@/interfaces/pastel";
import PastelesListCard from "@/components/Pasteles/PastelesListCard";
import { useCategory } from "@/hooks/useCategory";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  category: ICategoria;
}

const CategoryNamePage: NextPage<Props> = ({ category }) => {
  const { categories, isLoading, isError } = useCategory(
    "/pasteles/categoria/"
  );
  const { asPath, query } = useRouter();
  console.log(query);

  return (
    <MainLayout
      title={category.nombre + "- Deliza Cake Art"}
      pageDescription={category.descripcion}
    >
      <Breadcrumb
        title={category.nombre}
        subtitle={category.descripcion}
        description={category.descripcion}
        imageAlt="Los mejores pasteles de fondant y crema"
        image={BreadcrumbImg}
        overlay={false}
        gradient={true}
      />
      <section className="pt-8 pb-4">
        <Container>
          <div className="grid grid-cols-1 lg:gap-x-8 lg:grid-cols-4">
            <div>
              <h3 className="py-8 text-2xl text-center font-display">
                Categorias Pasteles
              </h3>
              <ul>
                {categories &&
                  categories?.data.map((category: ICategoria) => (
                    <Link
                      key={category.slug}
                      href={`/pasteles/categoria/${category.slug}`}
                      prefetch={false}
                    >
                      <a className="font-body">
                        <li
                          className={
                            asPath === `/pasteles/categoria/${category.slug}`
                              ? `bg-slate-400 px-6 py-4 border-b hover:bg-slate-400`
                              : `bg-slate-300 px-6 py-4 border-b hover:bg-slate-400`
                          }
                        >
                          {category.nombre}
                        </li>
                      </a>
                    </Link>
                  ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h2 className="py-8 text-3xl text-center text-gray-700 md:text-4xl font-display lg:text-left">
                {category.nombre}
              </h2>
              <div className="grid grid-cols-1 py-8 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 justify-items-center">
                {category.pasteles.map((pastel: IPastel) => (
                  <PastelesListCard pasteles={pastel} key={pastel.slug} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const categorySlugs = await dbCategories.getAllCategorySlugs();

  return {
    paths: categorySlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const category = await dbCategories.getCategoryBySlug(slug);

  console.log({ category });

  if (!category) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      category,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default CategoryNamePage;
