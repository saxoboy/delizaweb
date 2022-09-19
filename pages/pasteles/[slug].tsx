import { GetStaticProps, NextPage } from "next";
import { dbPasteles } from "@/database";
import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Container from "@/components/ui/Container";
import BreadcrumbImg from "@/public/img/breadcrumb.jpg";
import { IPastel } from "../../interfaces/pastel";
import { GetStaticPaths } from "next";

interface Props {
  pastel: IPastel;
}

const PastelesNamePage: NextPage<Props> = ({ pastel }) => {
  return (
    <MainLayout title={pastel.titulo} pageDescription={pastel.descripcion}>
      <Breadcrumb
        title={pastel.titulo}
        subtitle={pastel.descripcion}
        description={pastel.descripcion}
        imageAlt="Los mejores pasteles de fondant y crema"
        image={BreadcrumbImg}
        overlay={false}
        gradient={true}
      />
      <section className="pt-8 pb-4">
        <Container>
          <h2 className="py-12 text-3xl text-center text-gray-700 md:text-4xl font-display lg:text-left">
            {pastel.titulo}
          </h2>
        </Container>
      </section>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pastelSlugs = await dbPasteles.getAllPastelSlugs();

  return {
    paths: pastelSlugs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };
  const pastel = await dbPasteles.getPastelBySlug(slug);

  return {
    props: {
      pastel,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default PastelesNamePage;
