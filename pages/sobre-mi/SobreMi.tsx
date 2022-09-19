import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";
import MainLayout from "../../components/Layout/MainLayout";
import Container from "../../components/ui/Container";

const SobreMiPage = () => {
  return (
    <MainLayout title="Sobre Mi - Deliza Cake Art" pageDescription="Sobre mi">
      <Breadcrumb
        title="Sobre Mi"
        subtitle="Los mejores pasteles de fondant y crema"
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        overlay={true}
        gradient={false}
      />
      <Container>
        <h1>Sobre Mi</h1>
        <div>SobreMiPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default SobreMiPage;
