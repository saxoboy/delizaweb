import Head from "next/head";
import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "@/components/Layout/MainLayout";
import Container from "@/components/ui/Container";

const GalletasPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Galletas - Deliza Cake Art</title>
        <meta
          name="description"
          content="Los mejores Galletas tematicas para todos los gustos"
        />
      </Head>
      <Breadcrumb
        title="Galletas"
        subtitle="Los mejores Galletas tematicos para todos los gustos"
        description="Los mejores Galletas tematicos para todos los gustos"
        imageAlt="Los mejores Galletas tematicos para todos los gustos"
        overlay={false}
        gradient={true}
      />
      <Container>
        <h1>Galletas</h1>
        <div>GalletasPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default GalletasPage;
