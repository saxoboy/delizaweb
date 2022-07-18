import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import MainLayout from "../../components/Layout/MainLayout";
import Container from "../../components/ui/Container";
import BreadcrumbImg from "@/public/img/breadcrumb.jpg";

const PastelesPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Pasteles - Deliza Cake Art</title>
        <meta
          name="description"
          content="Los mejores pasteles de fondant y crema"
        />
      </Head>
      <Breadcrumb
        title="Pasteles"
        subtitle="Los mejores pasteles de fondant y crema"
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        image={BreadcrumbImg}
        overlay={false}
        gradient={true}
      />
      <Container>
        <h1>Pasteles</h1>
        <div>PastelesPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default PastelesPage;
