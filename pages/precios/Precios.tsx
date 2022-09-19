import Breadcrumb from "@/components/Breadcrumb";
import MainLayout from "../../components/Layout/MainLayout";
import Container from "../../components/ui/Container";

const PreciosPage = () => {
  return (
    <MainLayout
      title="Precios - Deliza Cake Art"
      pageDescription="Los mejores pasteles de fondant y crema"
    >
      <Breadcrumb
        title="Precios y Sabores"
        subtitle="Los mejores pasteles de fondant y crema"
        description="Los mejores pasteles de fondant y crema"
        imageAlt="Los mejores pasteles de fondant y crema"
        overlay={false}
        gradient={true}
      />
      <Container>
        <h1>Precios</h1>
        <div>PreciosPage</div>
        <div className="h-96"></div>
      </Container>
    </MainLayout>
  );
};

export default PreciosPage;
